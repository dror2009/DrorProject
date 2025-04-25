<%@ Page Title="Database Query for Admins" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="query.aspx.cs" Inherits="DrorProject.pages.admin.query" %>

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
            <h1 style="margin: 0 auto;">Admin Panel - Query</h1>
        </div>
        <form name="query" runat="server" method="post">
            <label for="query">Enter command: </label>
            <input type="text" name="query" id="query" placeholder="Enter query command here." />
            <br />
            <button type="submit">Execute</button>
        </form>
        <br />
        <div id="resultArea"><%=message %></div>
    </div>
    <script>
        $(document).ready(function () {
            $('#simpleQuery').submit(function (e) {
                e.preventDefault(); // Prevent the default form submission, stop submitting the form and move on to submitting via AJAX without refreshing the page.

                // Gather form data
                const formData = {
                    query: $('input[name=query]').val(),
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
