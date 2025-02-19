export const reachEoutTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #282828;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      color: #080808;
    }
    .content p {
      margin: 10px 0;
    }
    .content .highlight {
      color: #282828;
      font-weight: bold;
    }
    .footer {
      background-color: #f1f1f1;
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #777777;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      {{name}} Reached Out
    </div>
    <div class="content">
      <p><span class="highlight">From:</span> {{email}}</p>
      <p><span class="highlight">Name:</span> {{username}}</p>
      <p><span class="highlight">Message:</span></p>
      <p style="border-left: 4px solid #4caf50; padding-left: 10px; margin: 10px 0; font-style: italic;">
    {{message}}
      </p>
    </div>
    <div class="footer">
      This message was sent via your portfolio website's contact form.
    </div>
  </div>
</body>
</html>
`