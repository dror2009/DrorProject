<%@ Page Title="signup" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="signup.aspx.cs" Inherits="DrorProject.pages.signup" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-page-content">
    <h1>Sign up</h1>
    <form id="signup" runat="server" method="post">
        <label for="username">Enter username:</label>
        &nbsp;
        <input name="uName" type="text" id="username" placeholder="Enter username here." />
        <br />
        <label for="firstName">Enter first name:</label>
        &nbsp;
        <input name="fName" type="text" id="firstName" placeholder="Enter first name here." />
        <br />
        <label for="lastName">Enter last name:</label>
        &nbsp;
        <input name="lName" type="text" id="lastName" placeholder="Enter last name here." />
        <br />
        <label for="age">Enter age:</label>
        &nbsp;
        <input name="age" type="number" id="age" placeholder="Enter age here." value="0" step="1" />
        <br />
        <label for="email">Enter email:</label>
        &nbsp;
        <input name="email" type="text" id="email" placeholder="Enter email here." />
        <br />
        <label for="password">Enter password:</label>
        &nbsp;
        <input name="pwd" type="password" id="password" placeholder="Enter password here." />
        <br />
        <label for="confirmPassword">Re-enter your password:</label>
        &nbsp;
        <input name="pwd1" type="password" id="confirmPassword" placeholder="Re-enter your password here." />
        <br />
        <input type="radio" id="male" name="gender" value="true" checked />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="false" />
        <label for="female">Female</label>
        <br />
        <br />
        <label for="phonePrefix">Phone prefix:</label>
        &nbsp;
        <select id="phonePrefix" name="phonePrefix">
            <option value="050">050</option>
            <option value="051">051</option>
            <option value="052">052</option>
            <option value="053">053</option>
            <option value="054">054</option>
            <option value="055">055</option>
            <option value="056">056</option>
            <option value="057">057</option>
            <option value="058">058</option>
            <option value="059">059</option>
        </select>
        <br />
        <label for="phoneNum">Phone number:</label>
        &nbsp;
        <input type="text" id="phoneNum" name="phoneNum" placeholder="Enter phone number here." />
        <br />
        <label for="yearBorn">Year born:</label>
        &nbsp;
        <input type="text" id="yearBorn" name="yearBorn" placeholder="Enter your year of birth here." />
        <br />
        <label for="city">City:</label>
        &nbsp;
        <select id="city" name="city">
            <option value="telMond">Tel-Mond</option>
            <option value="kfarSaba">Kfar Saba</option>
            <option value="telAviv">Tel-Aviv</option>
            <option value="haifa">Haifa</option>
            <option value="natania">Natania</option>
            <option value="jerusalem">Jerusalem</option>
            <option value="eilat">Eilat</option>
        </select>
        <br />
        <input type="checkbox" id="fishing" name="hobby" value="fishing" />
        <label for="fishing">Fishing</label>
        <input type="checkbox" id="cooking" name="hobby" value="cooking" />
        <label for="cooking">Cooking</label>
        <input type="checkbox" id="travel" name="hobby" value="travel" />
        <label for="travel">Traveling</label>
        <input type="checkbox" id="coding" name="hobby" value="coding" />
        <label for="coding">Coding</label>
        <br />
        <br />
        <button type="submit">Sign up</button>
        <br />
        <h3><%=message %></h3>
    </form>
</div>
</asp:Content>
