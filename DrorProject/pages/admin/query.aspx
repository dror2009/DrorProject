<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="query.aspx.cs" Inherits="DrorProject.pages.admin.query" %>

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
            <input type="text" name="query" id="query" placeholder="Enter database command here." />
            <h3><%=message %></h3>
            <br />
            <button type="submit">Execute</button>
        </form>
        <br />
        <%=message2 %>
    </div>
</asp:Content>
