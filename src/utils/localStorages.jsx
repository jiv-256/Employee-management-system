
const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile the monthly financial report.",
          "taskDate": "2025-01-10",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Client Database",
          "taskDescription": "Ensure all client contact details are current.",
          "taskDate": "2025-01-15",
          "category": "Data Management",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting Preparation",
          "taskDescription": "Prepare agenda and slides for the team meeting.",
          "taskDate": "2025-01-18",
          "category": "Planning",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design New Landing Page",
          "taskDescription": "Create a design draft for the new marketing page.",
          "taskDate": "2025-01-11",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Bug #1123",
          "taskDescription": "Resolve the critical bug in the login system.",
          "taskDate": "2025-01-12",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Customer Feedback Analysis",
          "taskDescription": "Analyze customer survey data for insights.",
          "taskDate": "2025-01-09",
          "category": "Analytics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Draft Press Release",
          "taskDescription": "Write a draft for the upcoming product announcement.",
          "taskDate": "2025-01-14",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify stock levels for the warehouse.",
          "taskDate": "2025-01-12",
          "category": "Operations",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Supplier Meeting",
          "taskDescription": "Meet with key suppliers to discuss contracts.",
          "taskDate": "2025-01-13",
          "category": "Logistics",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Training Materials",
          "taskDescription": "Develop content for the new employee onboarding program.",
          "taskDate": "2025-01-15",
          "category": "HR",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Review Payroll Records",
          "taskDescription": "Ensure payroll records are accurate and up to date.",
          "taskDate": "2025-01-17",
          "category": "Finance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  

   
        const admin = [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }]
       

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
  
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(JSON.parse(data));
    
  }