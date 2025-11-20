import { Component } from '@angular/core';
import { CustomGridComponent } from '../../shared/custom-grid-component/custom-grid-component';

@Component({
  selector: 'app-sub-contractor-list-component',
  imports: [CustomGridComponent],
  templateUrl: './sub-contractor-list-component.html',
  styleUrl: './sub-contractor-list-component.css',
})
export class SubContractorListComponent {
  subContractorColumns = [
  { field: 'id', header: 'ID', width: '' },
  { field: 'companyName', header: 'Company Name', width: '' },
  { field: 'specialization', header: 'Specialization', width: '' },
  { field: 'contactPerson', header: 'Contact Person', width: '' },
  { field: 'contactNumber', header: 'Contact Number', width: '' },
  { field: 'email', header: 'Email', width: '' },
  { field: 'gstNo', header: 'GST No', width: '' },
  { field: 'companySize', header: 'Company Size', width: '' },
  { field: 'state', header: 'State', width: '' },
  { field: 'city', header: 'City', width: '' },
  { field: 'collaborationTerms', header: 'Collaboration Terms', width: '' },
  { field: 'remarks', header: 'Remarks', width: '' }
  ];
  subContractorData = [
  {
    id: 1,
    companyName: 'Acme Corp',
    specialization: 'Electronics',
    contactPerson: 'John Doe',
    contactNumber: '1234567890',
    email: 'john@acmecorp.com',
    gstNo: 123456789012345,
    companySize: 'Large',
    state: 'California',
    city: 'Los Angeles',
    collaborationTerms: 'Long term',
    remarks: 'Preferred vendor'
  },
  {
    id: 2,
    companyName: 'Beta Solutions',
    specialization: 'IT Services',
    contactPerson: 'Jane Smith',
    contactNumber: '0987654321',
    email: 'jane@betasolutions.com',
    gstNo: 987654321098765,
    companySize: 'Medium',
    state: 'Texas',
    city: 'Houston',
    collaborationTerms: 'Project based',
    remarks: ''
  },
  {
    id: 3,
    companyName: 'Gamma Supplies',
    specialization: 'Hardware',
    contactPerson: 'Robert Brown',
    contactNumber: '2345678901',
    email: 'robert@gammasupplies.com',
    gstNo: 192837465012374,
    companySize: 'Small',
    state: 'New York',
    city: 'Albany',
    collaborationTerms: 'Short term',
    remarks: 'Urgent deliveries'
  },
  {
    id: 4,
    companyName: 'Delta Industries',
    specialization: 'Construction',
    contactPerson: 'Laura Wilson',
    contactNumber: '3456789012',
    email: 'laura@deltaind.com',
    gstNo: 564738291045670,
    companySize: 'Large',
    state: 'Florida',
    city: 'Miami',
    collaborationTerms: 'Long term',
    remarks: 'High quality'
  },
  {
    id: 5,
    companyName: 'Epsilon Tech',
    specialization: 'Software',
    contactPerson: 'Richard Davis',
    contactNumber: '4567890123',
    email: 'richard@epsilontech.com',
    gstNo: 374829101238475,
    companySize: 'Medium',
    state: 'Washington',
    city: 'Seattle',
    collaborationTerms: 'Project based',
    remarks: ''
  },
  {
    id: 6,
    companyName: 'Zeta Logistics',
    specialization: 'Logistics',
    contactPerson: 'Emily Clark',
    contactNumber: '5678901234',
    email: 'emily@zetalogistics.com',
    gstNo: 918273645012382,
    companySize: 'Small',
    state: 'Illinois',
    city: 'Chicago',
    collaborationTerms: 'Short term',
    remarks: 'Flexible schedules'
  },
  {
    id: 7,
    companyName: 'Eta Services',
    specialization: 'Consulting',
    contactPerson: 'Michael Lee',
    contactNumber: '6789012345',
    email: 'michael@etaser.com',
    gstNo: 102938475601928,
    companySize: 'Large',
    state: 'Georgia',
    city: 'Atlanta',
    collaborationTerms: 'Long term',
    remarks: 'Trusted partner'
  },
  {
    id: 8,
    companyName: 'Theta Manufacturing',
    specialization: 'Manufacturing',
    contactPerson: 'Nancy Miller',
    contactNumber: '7890123456',
    email: 'nancy@theta-manufacture.com',
    gstNo: 564738291019283,
    companySize: 'Medium',
    state: 'Ohio',
    city: 'Cleveland',
    collaborationTerms: 'Project based',
    remarks: ''
  },
  {
    id: 9,
    companyName: 'Iota Retail',
    specialization: 'Retail',
    contactPerson: 'Steven Martinez',
    contactNumber: '8901234567',
    email: 'steven@iotaretail.com',
    gstNo: 374829102938475,
    companySize: 'Small',
    state: 'Nevada',
    city: 'Las Vegas',
    collaborationTerms: 'Short term',
    remarks: 'Seasonal contracts'
  },
  {
    id: 10,
    companyName: 'Kappa Energy',
    specialization: 'Energy',
    contactPerson: 'Angela Young',
    contactNumber: '9012345678',
    email: 'angela@kappaenergy.com',
    gstNo: 918273645091827,
    companySize: 'Large',
    state: 'Texas',
    city: 'Dallas',
    collaborationTerms: 'Long term',
    remarks: 'Eco-friendly policies'
  },
  {
    id: 11,
    companyName: 'Lambda Foods',
    specialization: 'Food & Beverage',
    contactPerson: 'Kevin Harris',
    contactNumber: '0123456789',
    email: 'kevin@lambdafoods.com',
    gstNo: 192837465091283,
    companySize: 'Medium',
    state: 'California',
    city: 'San Francisco',
    collaborationTerms: 'Project based',
    remarks: ''
  },
  {
    id: 12,
    companyName: 'Mu Electronics',
    specialization: 'Consumer Electronics',
    contactPerson: 'Patricia King',
    contactNumber: '1234509876',
    email: 'patricia@muelectronics.com',
    gstNo: 564738291056789,
    companySize: 'Small',
    state: 'Oregon',
    city: 'Portland',
    collaborationTerms: 'Short term',
    remarks: 'High demand'
  }
];


}
