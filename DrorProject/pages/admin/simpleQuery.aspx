<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="simpleQuery.aspx.cs" Inherits="DrorProject.pages.admin.simpleQuery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
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
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-page-content" style="max-width: 1000px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <a href="/pages/admin/adminMenu.aspx" style="font-size: 1rem; color: #333;">Go Back</a>
            <h1 style="margin: 0 auto;">Admin Panel - Simple Query</h1>
        </div>
        <form id="simpleQuery" name="simpleQuery" runat="server" method="post">
            <label for="command">Select command</label>
            <select name="command">
                <option value="select">select</option>
                <option value="update">update</option>
                <option value="delete">delete</option>
            </select>

            <label for="field">Choose a field:</label>
            <select name="field" id="field">
                <option value="Id">Id</option>
                <option value="UNAME">UNAME</option>
                <option value="FNAME">FNAME</option>
                <option value="LNAME">LNAME</option>
                <option value="EMAIL">EMAIL</option>
                <option value="GENDER">GENDER</option>
                <option value="AGE">AGE</option>
                <option value="PREFIX">PREFIX</option>
                <option value="PNUM">PNUM</option>
                <option value="CITY">CITY</option>
                <option value="HOBBY">HOBBY</option>
                <option value="YEARBORN">YEARBORN</option>
            </select>

            <label for="inp">Enter value (for UPDATE: set selected field to this value, for SELECT: find where field is like %value%)</label>
            <input type="text" name="inp" />

            <label for="inp2">Enter condition value (UPDATE command only: WHERE selected field equals this value)</label>
            <input type="text" name="inp2" />

            <button type="submit">Execute</button>
            <br />
            <br />
            <div id="resultArea"><%=message %></div>
        </form>
    </div>
    <script>
        $(document).ready(function () {
            $('#simpleQuery').submit(function (e) {
                e.preventDefault(); // Prevent the default form submission, stop submitting the form and move on to submitting via AJAX without refreshing the page.

                // Gather form data
                const formData = {
                    command: $('select[name="command"]').val(),
                    field: $('select[name="field"]').val(),
                    inp: $('input[name="inp"]').val(),
                    inp2: $('input[name="inp2"]').val()
                };

                $.ajax({
                    type: 'POST',
                    url: 'simpleQuery.aspx',
                    data: formData,  // Sends the form data, Request.Form will not work without that when using AJAX.
                    success: function (data) {
                        // What happens on success
                        const html = $(data); // Takes the server-side response (in this case message's new value in #resultArea).
                        const message = html.find('#resultArea').html(); // Takes only the div with the id #resultArea from the server's response and copies the response.
                        $('#resultArea').html(message); // Puts the response in the client-side.
                    },
                    error: function (xhr, status, error) {
                        // What happens on error
                        document.getElementById('resultArea').innerHTML = 'Error: ' + error; // Writes the error at the result area/message in case of submitting error.
                    }
                });
            });
        });
    </script>
</asp:Content>
