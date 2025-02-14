<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="adminUpd.aspx.cs" Inherits="DrorProject.pages.admin.adminUpd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-page-content">
        <h1>Update data for <%=Session["AdminUpdateName"] %>:</h1>
        <form id="update" runat="server" method="post">
            <label for="uName">Enter username:</label>
            <input name="uName" type="text" id="uName" placeholder="Enter username here." value="<%=oldUName %>" />
            <br />
            <label for="firstName">Enter first name:</label>
            <input name="fName" type="text" id="firstName" placeholder="Enter first name here." value="<%=oldFName %>" />
            <br />
            <label for="lastName">Enter last name:</label>
            <input name="lName" type="text" id="lastName" placeholder="Enter last name here." value="<%=oldLName %>" />
            <br />
            <label for="mage">Enter age:</label>
            <input name="mage" type="number" id="mage" placeholder="Enter age here." value="<%=oldAge %>" step="1" />
            <br />
            <label for="emmail">Enter email:</label>
            <input name="emmail" type="text" id="emmail" placeholder="Enter email here." value="<%=oldEmail %>" />
            <br />
            <label for="pwd">Enter password:</label>
            <input name="pwd" type="password" id="pwd" placeholder="Enter password here." value="<%=oldPwd %>" />
            <br />
            <label for="pwd1">Re-enter your password:</label>
            <input name="pwd1" type="password" id="pwd1" placeholder="Re-enter your password here." value="<%=oldPwd %>" />
            <br />
            <% if (oldGender)
                {%>
            <input type="radio" name="gender" value="true" checked="checked" />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="false" />
            <label for="female">Female</label>
            <% }
                else
                {%>
            <input type="radio" name="gender" value="true" />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="false" checked="checked" />
            <label for="female">Female</label>
            <% } %>
            <br />
            <br />
            <label for="phonePrefix">Phone prefix:</label>
            <select id="phonePrefix" name="phonePrefix">
                <% foreach (var prefix in new[] { "050", "051", "052", "053", "054", "055", "056", "057", "058", "059" })
                    { %>
                <option value="<%= prefix %>" <%= oldPrefix == prefix ? "selected" : "" %>><%= prefix %></option>
                <% } %>
            </select>

            <br />
            <label for="phoneNum">Phone number:</label>
            <input type="text" id="phoneNum" name="phoneNum" placeholder="Enter phone number here." value="<%=oldPhoneNum %>" />
            <br />
            <label for="yearBorn">Year born:</label>
            <input type="text" id="yearBorn" name="yearBorn" placeholder="Enter your year of birth here." value="<%=oldYear %>" />
            <br />
            <label for="city">City:</label>
            <select id="citty" name="citty">
                <% 
                    var cities = new[] { "Tel-Mond", "Kfar Saba", "Tel-Aviv", "Haifa", "Natania", "Jerusalem", "Eilat" };
                    foreach (var city in cities)
                    {
                %>
                <option value="<%= city %>" <%= city == oldCity ? "selected" : "" %>><%= city %></option>
                <% } %>
            </select>
            <br />
            <% if (oldHobby.Contains("fishing"))
                {%>
            <input type="checkbox" id="fishing" name="hobby" value="fishing" checked="checked" />
            <% }
                else
                { %>
            <input type="checkbox" id="Checkbox1" name="hobby" value="fishing" />
            <% } %>
            <label for="fishing">Fishing</label>

            <% if (oldHobby.Contains("cooking"))
                {%>
            <input type="checkbox" id="cooking" name="hobby" value="cooking" checked="checked" />
            <% }
                else
                { %>
            <input type="checkbox" id="Checkbox2" name="hobby" value="cooking" />
            <% } %>
            <label for="cooking">Cooking</label>

            <% if (oldHobby.Contains("travel"))
                {%>
            <input type="checkbox" id="travel" name="hobby" value="travel" checked="checked" />
            <% }
                else
                { %>
            <input type="checkbox" id="Checkbox3" name="hobby" value="travel" />
            <% } %>
            <label for="travel">Traveling</label>

            <% if (oldHobby.Contains("coding"))
                {%>
            <input type="checkbox" id="coding" name="hobby" value="coding" checked="checked" />
            <% }
                else
                { %>
            <input type="checkbox" id="Checkbox4" name="hobby" value="coding" />
            <% } %>
            <label for="coding">Coding</label>
            <br />
            <br />
            <button type="submit">Update and go back to admin page</button>
        </form>

    </div>
</asp:Content>
