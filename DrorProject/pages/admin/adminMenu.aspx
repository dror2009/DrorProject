<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="adminMenu.aspx.cs" Inherits="DrorProject.pages.admin.adminMenu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        h2 {
            color: #333;
        }

        a {
            color: #333;
        }

            a, a:visited {
                color: #333;
                text-decoration: none;
            }

                a:hover {
                    text-decoration: underline;
                    color: #333;
                }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content" style="max-width: 400px;">
        <center>
            <h2>Admin Menu</h2>
            <h3>Connected Users: <%=Application["connections"] %></h3>
        </center>
        <h2><a href="printDB.aspx">Users Control</a></h2>
        <h2><a href="query.aspx">Query</a></h2>
    </div>
</asp:Content>
