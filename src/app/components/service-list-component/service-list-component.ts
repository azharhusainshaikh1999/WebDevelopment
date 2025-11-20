import { Component } from '@angular/core';
import { CustomGridComponent } from "../../shared/custom-grid-component/custom-grid-component";

@Component({
  selector: 'app-service-list-component',
  imports: [CustomGridComponent],
  templateUrl: './service-list-component.html',
  styleUrl: './service-list-component.css',
})
export class ServiceListComponent {
  labourColumns = [
  { field: 'id', header: 'ID', width: '' },
  { field: 'labourName', header: 'Labour Name', width: '' },
  { field: 'image', header: 'Image', width: '' },
  { field: 'skill', header: 'Skill', width: '' },
  { field: 'skillLevel', header: 'Skill Level', width: '' },
  { field: 'state', header: 'State', width: '' },
  { field: 'city', header: 'City', width: '' },
  { field: 'contactNumber', header: 'Contact Number', width: '' },
  { field: 'aadharNo', header: 'Aadhar No', width: '' },
  { field: 'certificate', header: 'Certificate', width: '' },
  { field: 'dailyrate', header: 'Daily Rate', width: '' },
  { field: 'isAvailable', header: 'Available', width: '' },
  { field: 'contracterRef', header: 'Contracter Ref', width: '' },
  { field: 'PerformanceRating', header: 'Performance Rating', width: '' }
  ];

  labourData = [
  { id: 1, labourName: 'John Doe', image: 'image1.jpg', skill: 'Carpentry', skillLevel: 'Expert', state: 'Karnataka', city: 'Bangalore', contactNumber: '9876543210', aadharNo: 123456789012, certificate: 'Certified Carpenter', dailyrate: 500, isAvailable: true, contracterRef: 'Ref1', PerformanceRating: 'A' },
  { id: 2, labourName: 'Jane Smith', image: 'image2.jpg', skill: 'Plumbing', skillLevel: 'Intermediate', state: 'Tamil Nadu', city: 'Chennai', contactNumber: '9123456780', aadharNo: 223456789012, certificate: 'Certified Plumber', dailyrate: 450, isAvailable: false, contracterRef: 'Ref2', PerformanceRating: 'B' },
  { id: 3, labourName: 'Michael Johnson', image: 'image3.jpg', skill: 'Electrical', skillLevel: 'Advanced', state: 'Maharashtra', city: 'Mumbai', contactNumber: '9988776655', aadharNo: 323456789012, certificate: 'Electrician License', dailyrate: 600, isAvailable: true, contracterRef: 'Ref3', PerformanceRating: 'A+' },
  { id: 4, labourName: 'Emily Wang', image: 'image4.jpg', skill: 'Masonry', skillLevel: 'Expert', state: 'Delhi', city: 'New Delhi', contactNumber: '9876501234', aadharNo: 423456789012, certificate: 'Certified Mason', dailyrate: 520, isAvailable: true, contracterRef: 'Ref4', PerformanceRating: 'A' },
  { id: 5, labourName: 'Raj Patel', image: 'image5.jpg', skill: 'Painting', skillLevel: 'Beginner', state: 'Gujarat', city: 'Ahmedabad', contactNumber: '9112233445', aadharNo: 523456789012, certificate: 'Painter Certification', dailyrate: 350, isAvailable: false, contracterRef: 'Ref5', PerformanceRating: 'B+' },
  { id: 6, labourName: 'Sara Lee', image: 'image6.jpg', skill: 'Welding', skillLevel: 'Advanced', state: 'West Bengal', city: 'Kolkata', contactNumber: '9334455667', aadharNo: 623456789012, certificate: 'Welding Certificate', dailyrate: 600, isAvailable: true, contracterRef: 'Ref6', PerformanceRating: 'A' },
  { id: 7, labourName: 'David Brown', image: 'image7.jpg', skill: 'Carpentry', skillLevel: 'Intermediate', state: 'Kerala', city: 'Trivandrum', contactNumber: '9445566778', aadharNo: 723456789012, certificate: 'Certified Carpenter', dailyrate: 480, isAvailable: true, contracterRef: 'Ref7', PerformanceRating: 'B' },
  { id: 8, labourName: 'Linda Green', image: 'image8.jpg', skill: 'Plumbing', skillLevel: 'Expert', state: 'Rajasthan', city: 'Jaipur', contactNumber: '9556677889', aadharNo: 823456789012, certificate: 'Certified Plumber', dailyrate: 550, isAvailable: false, contracterRef: 'Ref8', PerformanceRating: 'A+' },
  { id: 9, labourName: 'James Wilson', image: 'image9.jpg', skill: 'Electrical', skillLevel: 'Beginner', state: 'Punjab', city: 'Chandigarh', contactNumber: '9667788990', aadharNo: 923456789012, certificate: 'Electrician License', dailyrate: 420, isAvailable: true, contracterRef: 'Ref9', PerformanceRating: 'B' },
  { id: 10, labourName: 'Patricia Kim', image: 'image10.jpg', skill: 'Masonry', skillLevel: 'Advanced', state: 'Haryana', city: 'Gurgaon', contactNumber: '9778899001', aadharNo: 103456789012, certificate: 'Certified Mason', dailyrate: 580, isAvailable: true, contracterRef: 'Ref10', PerformanceRating: 'A' },
  { id: 11, labourName: 'Mark Thompson', image: 'image11.jpg', skill: 'Painting', skillLevel: 'Intermediate', state: 'Odisha', city: 'Bhubaneswar', contactNumber: '9889900112', aadharNo: 113456789012, certificate: 'Painter Certification', dailyrate: 400, isAvailable: false, contracterRef: 'Ref11', PerformanceRating: 'B+' },
  { id: 12, labourName: 'Angela Martinez', image: 'image12.jpg', skill: 'Welding', skillLevel: 'Expert', state: 'Telangana', city: 'Hyderabad', contactNumber: '9990011223', aadharNo: 123456789012, certificate: 'Welding Certificate', dailyrate: 620, isAvailable: true, contracterRef: 'Ref12', PerformanceRating: 'A+' }
  ];

}
