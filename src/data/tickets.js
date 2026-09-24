const tickets = [
  {
    id: 1,
    customer: {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 9876543210",
    },
    subject: "Unable to login to my account",
    description:
      "I have been trying to log in to my account since morning, but I keep getting an invalid credentials error even though my password is correct.",
    priority: "High",
    status: "Open",
    createdAt: "2026-09-20T10:30:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "I am unable to login to my account.",
        timestamp: "2026-09-20T10:30:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "Hi Rahul, we are checking the login issue. Please give us a few minutes.",
        timestamp: "2026-09-20T10:45:00",
      },
    ],
  },

  {
    id: 2,
    customer: {
      name: "Priya Verma",
      email: "priya.verma@example.com",
      phone: "+91 9812345678",
    },
    subject: "Payment deducted but order not placed",
    description:
      "The payment was successfully deducted from my bank account, but the order still shows as pending.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-09-21T09:15:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "My payment was deducted but I have not received an order confirmation.",
        timestamp: "2026-09-21T09:15:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "We have received your request and are checking the payment status.",
        timestamp: "2026-09-21T09:30:00",
      },
    ],
  },

  {
    id: 3,
    customer: {
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
      phone: "+91 9765432109",
    },
    subject: "How can I update my profile?",
    description:
      "I want to change my phone number and address from my account profile.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-18T14:20:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "How can I update my profile information?",
        timestamp: "2026-09-18T14:20:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "You can update your profile from Settings > Account Information.",
        timestamp: "2026-09-18T14:35:00",
      },
    ],
  },

  {
    id: 4,
    customer: {
      name: "Neha Singh",
      email: "neha.singh@example.com",
      phone: "+91 9898989898",
    },
    subject: "Refund has not been received",
    description:
      "My refund was approved five days ago, but the amount has still not been credited to my bank account.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-09-22T11:10:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "My refund was approved but I haven't received the money.",
        timestamp: "2026-09-22T11:10:00",
      },
    ],
  },

  {
    id: 5,
    customer: {
      name: "Vikas Gupta",
      email: "vikas.gupta@example.com",
      phone: "+91 9123456780",
    },
    subject: "Wrong product delivered",
    description:
      "I ordered a black backpack but received a blue backpack instead.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2026-09-22T15:40:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "I received the wrong color of the product.",
        timestamp: "2026-09-22T15:40:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "We apologize for the inconvenience. We are checking the replacement options.",
        timestamp: "2026-09-22T16:00:00",
      },
    ],
  },

  {
    id: 6,
    customer: {
      name: "Anjali Mehta",
      email: "anjali.mehta@example.com",
      phone: "+91 9001122334",
    },
    subject: "Unable to download invoice",
    description:
      "The invoice download button is not working from my orders page.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-19T12:25:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "I cannot download my invoice.",
        timestamp: "2026-09-19T12:25:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "The issue has been fixed. Please try downloading the invoice again.",
        timestamp: "2026-09-19T13:00:00",
      },
    ],
  },

  {
    id: 7,
    customer: {
      name: "Rohit Malhotra",
      email: "rohit.malhotra@example.com",
      phone: "+91 9870011223",
    },
    subject: "Account verification problem",
    description:
      "I uploaded my documents for account verification but the verification is still pending.",
    priority: "High",
    status: "Open",
    createdAt: "2026-09-23T08:50:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "My account verification has been pending for two days.",
        timestamp: "2026-09-23T08:50:00",
      },
    ],
  },

  {
    id: 8,
    customer: {
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      phone: "+91 9988776655",
    },
    subject: "Unable to apply discount coupon",
    description:
      "The discount coupon I received through email is showing as invalid during checkout.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-09-23T13:30:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "The coupon code from your email is not working.",
        timestamp: "2026-09-23T13:30:00",
      },
    ],
  },

  {
    id: 9,
    customer: {
      name: "Karan Arora",
      email: "karan.arora@example.com",
      phone: "+91 9345678123",
    },
    subject: "Order delivery delayed",
    description:
      "My order was expected yesterday but the tracking information has not been updated.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-09-21T17:45:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "My order is delayed and the tracking has not changed.",
        timestamp: "2026-09-21T17:45:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "We have contacted the delivery partner and will update you shortly.",
        timestamp: "2026-09-21T18:10:00",
      },
    ],
  },

  {
    id: 10,
    customer: {
      name: "Pooja Agarwal",
      email: "pooja.agarwal@example.com",
      phone: "+91 9012345678",
    },
    subject: "Change registered email address",
    description:
      "I want to change the email address associated with my account.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-17T10:05:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "I want to change my registered email address.",
        timestamp: "2026-09-17T10:05:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "Your email address has been successfully updated.",
        timestamp: "2026-09-17T10:30:00",
      },
    ],
  },
];

export default tickets;