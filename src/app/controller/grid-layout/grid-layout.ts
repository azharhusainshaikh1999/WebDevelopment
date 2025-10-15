import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Column {
  field: string;
  header: string;
  width: string;
}

@Component({
  selector: 'app-grid-layout',
  imports: [CommonModule],
  templateUrl: './grid-layout.html',
  styleUrls: ['./grid-layout.css']
})
export class GridLayout {
  @Input()
  columns: Column[] = [];

  @Input()
  data: any[] = [];

  sortField: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  // full sorted dataset
  sortedData = [...this.data];

  // Pagination state
  @Input() pageSize = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 50];
  currentPage = 1;
  totalPages = 1;
  totalEntries = 0;
  // current page slice shown in the table
  pagedData: any[] = [];

  // Emitters for action column buttons
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  ngOnChanges() {
    // re-create sortedData from the input data whenever inputs change
    this.sortedData = [...(this.data || [])];
    this.totalEntries = this.sortedData.length;
    if (this.sortField) {
      // keep current sort but don't toggle direction
      this.sort(this.sortField, false);
    }
    // ensure pageSize is same
    // coerce pageSize to number in case it was passed as a string
    const parsedPageSize = typeof this.pageSize === 'string' ? parseInt(this.pageSize as any, 5) : this.pageSize;
    if (!parsedPageSize || parsedPageSize <= 0) this.pageSize = 5;
    else this.pageSize = parsedPageSize as number;
    this.currentPage = 1;
    this.updatePagination();
  }

  sort(field: string, toggleDirection = true) {
    if (this.sortField === field && toggleDirection) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortedData.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      let compare = 0;
      if (aValue > bValue) compare = 1;
      else if (aValue < bValue) compare = -1;
      return this.sortDirection === 'asc' ? compare : -compare;
    });
    // After sorting, refresh pagination slice
    this.updatePagination();
  }

  // Implement simple resizing logic if desired:
  // Method startResize to handle mousemove and resize column width dynamically
  // This requires using Renderer2 or direct style manipulation and event listeners 
  // For brevity, not fully implemented here.
  startResize(event: MouseEvent, col: Column) {
    // Prevent text selection / default drag behavior
    event.preventDefault();

    // Determine initial pointer X (support touch fallback)
    const getClientX = (e: any) => {
      if (e instanceof MouseEvent) return e.clientX;
      if (e && e.touches && e.touches[0]) return e.touches[0].clientX;
      return 0;
    };

    const startX = getClientX(event as any);

    // Try to find the header cell element to read its current width
    const target = event.target as HTMLElement;
    const headerEl = target && (target.closest ? target.closest('th') : null) as HTMLElement | null;
    const refEl = headerEl || (target as HTMLElement);

    // Parse existing column.width (if present and in px) otherwise fall back to element width
    let startWidth = Number.NaN;
    if (col && typeof col.width === 'string') {
      const parsed = parseInt(col.width, 10);
      if (!Number.isNaN(parsed)) startWidth = parsed;
    }
    if (Number.isNaN(startWidth)) {
      try {
        startWidth = Math.round(refEl.getBoundingClientRect().width);
      } catch (_e) {
        startWidth = 100; // conservative default
      }
    }

    const minWidth = 30; // px

    // Handler functions (use any to keep typings simple)
    const onMove = (moveEvent: any) => {
      const clientX = getClientX(moveEvent);
      const delta = clientX - startX;
      const newWidth = Math.max(minWidth, Math.round(startWidth + delta));
      // Update the column width as a CSS value (px). Template should bind to this.
      col.width = `${newWidth}px`;
      // Prevent scrolling while dragging on touch
      if (moveEvent.cancelable) moveEvent.preventDefault();
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove as any);
      document.removeEventListener('mouseup', onUp as any);
      document.removeEventListener('touchmove', onMove as any);
      document.removeEventListener('touchend', onUp as any);
    };

    // Attach listeners on the document so dragging works even if the pointer leaves the header
    document.addEventListener('mousemove', onMove as any);
    document.addEventListener('mouseup', onUp as any);
    // Touch support
    document.addEventListener('touchmove', onMove as any, { passive: false } as any);
    document.addEventListener('touchend', onUp as any);
  }

  // --- Pagination helpers ---
  private updatePagination() {
    this.totalEntries = this.sortedData.length;
    const size = typeof this.pageSize === 'string' ? parseInt(this.pageSize as any, 5) : this.pageSize;
    const numericSize = (size && size > 0) ? size : 5;
    this.totalPages = Math.max(1, Math.ceil(this.totalEntries / numericSize));
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    if (this.currentPage < 1) this.currentPage = 1;
    const start = (this.currentPage - 1) * numericSize;
    const end = start + numericSize;
    this.pagedData = this.sortedData.slice(start, end);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number) {
    const p = Math.max(1, Math.min(this.totalPages, Math.floor(page)));
    this.currentPage = p;
    this.updatePagination();
  }

  setPageSize(size: number | string) {
    const parsed = typeof size === 'string' ? parseInt(size, 10) : size;
    if (!parsed || parsed <= 0) return;
    this.pageSize = parsed as number;
    this.currentPage = 1; // reset to first page
    this.updatePagination();
  }

  get startIndex() {
    if (this.totalEntries === 0) return 0;
    const size = typeof this.pageSize === 'string' ? parseInt(this.pageSize as any, 10) : this.pageSize;
    const numericSize = (size && size > 0) ? size : 10;
    return (this.currentPage - 1) * numericSize + 1;
  }

  get endIndex() {
    const size = typeof this.pageSize === 'string' ? parseInt(this.pageSize as any, 10) : this.pageSize;
    const numericSize = (size && size > 0) ? size : 10;
    return Math.min(this.currentPage * numericSize, this.totalEntries);
  }

  // Called from template when action buttons are clicked
  onEditRow(row: any) {
    this.edit.emit(row);
  }

  onDeleteRow(row: any) {
    this.delete.emit(row);
  }
}
