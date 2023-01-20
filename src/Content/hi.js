const first = `<html lang="en">
<head>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      color: #fff;
      font-family: "Muli", sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      margin: 0;
      background-image: linear-gradient(27deg, #61fc00, #db211bd7);
    }

    .container {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 20px 40px;
      border-radius: 5px;
      transition: transform ease 1s;
    }

    .container:hover {
      transform: scale(1.1);
    }

    .container h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    .container a {
      text-decoration: none;
      color: lightblue;
    }

    .btn {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      background: rgb(0, 191, 254);
      padding: 15px;
      font-family: inherit;
      font-size: 16px;
      border: 0;
      border-radius: 5px;
      transition: transform ease 1s;
      color: white;
    }

    .btn:hover {
      transform: scale(0.8);
      background: rgb(58, 39, 199);
    }

    .btn:focus {
      outline: 0;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .text {
      margin-top: 30px;
      margin-left: 25px;
    }

    .form-control {
      position: relative;
      margin: 20px 0 40px;
      width: 300px;
    }

    .form-control input {
      background-color: transparent;
      border: 0;
      border-bottom: 2px #fff solid;
      display: block;
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      color: #fff;
    }

    .form-control input:focus,
    .form-control input:valid {
      outline: 0;
      border-bottom-color: lightblue;
    }

    .form-control label {
      position: absolute;
      top: 15px;
      left: 0;
      pointer-events: none;
    }

    .form-control label span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .form-control input:focus+label span,
    .form-control input:valid+label span {
      color: lightblue;
      transform: translateY(-30px);
    }
    h1:hover {
        color:black;;
      }
      .text:hover {
        color:rgb(255, 0, 0);
      }
  </style>
  <title>Login Form</title>
</head>

<body>
  <div class="container">
    <h1>Linkedin</h1>
    <form>
      <div class="form-control">
        <input type="text">
        <label>Email</label>
      </div>

      <div class="form-control">
        <input type="password">
        <label>Password</label>
      </div>

      <button class="btn"><a href="https://www.linkedin.com/in/shayanbiswas/">Linkedin</a></button>

      <div class="text">Don't have an account? <a href="#">Register</a> </div>
    </form>
  </div>
</body>
</html>`;

module.exports.first = first;
