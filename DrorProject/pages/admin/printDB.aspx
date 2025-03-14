<%@ Page Title="Database Control For Admins" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="printDB.aspx.cs" Inherits="DrorProject.pages.admin.printDB" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        h2 {
            color: #333;
        }

        table {
            width: 100% !important;
            margin-left: auto;
            margin-right: auto;
            border-collapse: collapse;
            background: white;
            display: block; /* Forces width to be applied */
            overflow-x: auto; /* Prevents unnecessary scrolling */
            align-content: center;
        }



        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background: #007BFF;
            color: white;
        }

        button {
            margin: 10px;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            color: white;
            font-size: 16px;
        }

        #deleteBtn {
            background-color: red;
        }

        #updateBtn {
            background-color: blue;
        }

        #toggleBtn {
            background-color: green;
        }

        button:hover {
            opacity: 0.8;
            transform: scale(1.05);
        }
    </style>
    <script>
        function getSelectedUsers() {
            var selected = [];
            document.querySelectorAll("input[name='selectedUsers']:checked").forEach(cb => {
                if (!selected.includes(cb.value)) {
                    selected.push(cb.value);
                }
            });
            return selected.join(",");
        }

        function performAction(action) {
            var selectedIds = getSelectedUsers();

            if (selectedIds.length === 0) {
                alert("Please select at least one user.");
                return;
            }

            if (action === "update" && selectedIds.includes(",")) {
                alert("Please select only one user to update.");
                return;
            }

            document.getElementById("actionType").value = action;
            document.getElementById("selectedUsers").value = selectedIds;
            document.getElementById("adminForm").submit();
        }
        function updateUsersTable() {
            $.ajax({
                type: "POST",
                url: "printDB.aspx/GetUpdatedUsersHtml",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    document.getElementById("usersTableContainer").innerHTML = response.d;
                },
                error: function (error) {
                    console.error("Error fetching updated users table:", error);
                }
            });
        }

        setInterval(updateUsersTable, 5000);
    </script>


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <a href="/pages/admin/adminMenu.aspx" style="font-size: 1rem; color: #333;">Go Back</a>
            <h1 style="margin: 0 auto;">Admin Panel - Manage Users</h1>
        </div>
        <form name="filter" id="filter" method="post" runat="server">
            <label for="filterValue">Enter value you want to filter: </label>
            <select id="filterValue" name="filterValue">
                <%foreach (var filterValues in new[] { "Id", "UNAME", "FNAME", "LNAME", "EMAIL", "GENDER", "AGE", "PREFIX", "PNUM", "CITY", "HOBBY", "YEARBORN", "USERPERMISSION" })
                    {%>
                <option value="<%=filterValues %>"><%= filterValues %></option>
                <%} %>
            </select>
            <input type="text" name="textInput" id="textInput" style="display: none;" />
            <%--Id, UNAME, FNAME, LNAME, EMAIL, PNUM, USERPERMISSION--%>
            <input type="number" name="numberInput" id="numberInput" value="0" step="1" style="display: none;" />
            <%-- AGE, YEARBORN --%>
            <select id="prefix" name="prefix" style="display: none;">
                <%foreach (var prefix in new[] { "050", "051", "052", "053", "054", "055", "056", "057", "058", "059" })
                    {%>
                <option value="<%=prefix%>"><%=prefix %></option>
                <% } %>
            </select>
            <select id="city" name="city" style="display: none;">
                <option value="telMond">Tel-Mond</option>
                <option value="kfarSaba">Kfar Saba</option>
                <option value="telAviv">Tel-Aviv</option>
                <option value="haifa">Haifa</option>
                <option value="natania">Natania</option>
                <option value="jerusalem">Jerusalem</option>
                <option value="eilat">Eilat</option>
            </select>

            <input type="checkbox" id="fishing" name="hobby" value="fishing" style="display: none;" />
            <label for="fishing" style="display: none;">Fishing</label>
            <input type="checkbox" id="cooking" name="hobby" value="cooking" style="display: none;" />
            <label for="cooking" style="display: none;">Cooking</label>
            <input type="checkbox" id="travel" name="hobby" value="travel" style="display: none;" />
            <label for="travel" style="display: none;">Traveling</label>
            <input type="checkbox" id="coding" name="hobby" value="coding" style="display: none;" />
            <label for="coding" style="display: none;">Coding</label>

            <input type="radio" id="male" name="gender" value="true" style="display: none;" checked />
            <label for="male" style="display: none;">Male</label>
            <input type="radio" id="female" name="gender" value="false" style="display: none;" />
            <label for="female" style="display: none;">Female</label>
            <button type="submit">Filter</button>
        </form>
        <center>
            <h3>Connected Users: <%=Application["connections"] %></h3>
            <button type="button" id="deleteBtn" onclick="performAction('delete')">🗑 Delete Selected</button>
            <button type="button" id="updateBtn" onclick="performAction('update')">✏️ Update Selected</button>
            <button type="button" id="toggleBtn" onclick="performAction('togglePermissions')">🔄 Toggle Admin Permission</button>
            <form id="adminForm" method="post">
                <input type="hidden" id="selectedUsers" name="selectedUsers">
                <input type="hidden" id="actionType" name="actionType">

                <%= UsersHtml %>
                <!-- This prints the user table from the backend -->


            </form>
        </center>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const filterSelect = document.getElementById("filterValue");
            const textInput = document.getElementById("textInput");
            const numberInput = document.getElementById("numberInput");
            const prefixSelect = document.getElementById("prefix");
            const citySelect = document.getElementById("city");
            const hobbies = document.querySelectorAll("input[name='hobby']");
            const hobbyLabels = document.querySelectorAll("label[for='fishing'], label[for='cooking'], label[for='travel'], label[for='coding']");
            const genderRadios = document.querySelectorAll("input[name='gender']");
            const genderLabels = document.querySelectorAll("label[for='male'], label[for='female']");
            const form = document.getElementById("filter");
            const submitButton = form.querySelector("button[type='submit']");

            function hideAllFields() {
                textInput.style.display = "none";
                textInput.value = "";
                numberInput.style.display = "none";
                numberInput.value = "";
                prefixSelect.style.display = "none";
                citySelect.style.display = "none";
                hobbies.forEach(hobby => {
                    hobby.style.display = "none";
                    hobby.checked = false;
                });
                hobbyLabels.forEach(label => {
                    label.style.display = "none";
                });
                genderRadios.forEach(gender => {
                    gender.style.display = "none";
                });
                genderLabels.forEach(label => {
                    label.style.display = "none";
                });
            }

            function showRelevantField() {
                hideAllFields();
                const selectedValue = filterSelect.value;

                if (["Id", "UNAME", "FNAME", "LNAME", "EMAIL", "PNUM", "USERPERMISSION"].includes(selectedValue)) {
                    textInput.style.display = "inline-block";
                } else if (["AGE", "YEARBORN"].includes(selectedValue)) {
                    numberInput.style.display = "inline-block";
                } else if (selectedValue === "PREFIX") {
                    prefixSelect.style.display = "inline-block";
                } else if (selectedValue === "CITY") {
                    citySelect.style.display = "inline-block";
                } else if (selectedValue === "HOBBY") {
                    hobbies.forEach(hobby => hobby.style.display = "inline-block");
                    hobbyLabels.forEach(label => label.style.display = "inline-block");
                } else if (selectedValue === "GENDER") {
                    genderRadios.forEach(gender => gender.style.display = "inline-block");
                    genderLabels.forEach(label => label.style.display = "inline-block");
                }
            }

            function validateForm(event) {
                let isValid = false;

                if (textInput.style.display !== "none" && textInput.value.trim() !== "") {
                    isValid = true;
                } else if (numberInput.style.display !== "none" && numberInput.value.trim() !== "") {
                    isValid = true;
                } else if (prefixSelect.style.display !== "none" && prefixSelect.value !== "") {
                    isValid = true;
                } else if (citySelect.style.display !== "none" && citySelect.value !== "") {
                    isValid = true;
                } else if ([...hobbies].some(hobby => hobby.style.display !== "none" && hobby.checked)) {
                    isValid = true;
                } else if ([...genderRadios].some(gender => gender.style.display !== "none" && gender.checked)) {
                    isValid = true;
                }

                if (!isValid) {
                    event.preventDefault();
                    alert("Please enter a value in the selected field before submitting.");
                }
            }

            filterSelect.addEventListener("change", showRelevantField);
            form.addEventListener("submit", validateForm);

            showRelevantField(); // Initial call to set the correct field visibility
        });
    </script>
</asp:Content>
