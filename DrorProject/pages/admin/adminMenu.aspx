<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="adminMenu.aspx.cs" Inherits="DrorProject.pages.admin.adminMenu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        h2 {
            color: #333;
        }

        .link a {
            color: #333;
        }

            .link a, a:visited {
                color: #333;
                text-decoration: none;
            }

                .link a:hover {
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
        <h2><a href="printDB.aspx" class="link">Users Control</a></h2>
        <h2><a href="query.aspx" class="link">Query</a></h2>
        <form method="post" runat="server" name="clearChat" id="clearChatForm">
            <button type="button" id="firstClick">Clear Chat</button>
            <button type="submit" id="secondClick" style="display: none;">Are you sure?</button>
        </form>
    </div>
    <script>
        document.getElementById("firstClick").addEventListener("click", function () {
            this.style.display = "none";
            document.getElementById("secondClick").style.display = "inline-block";
        });
    </script>
</asp:Content>
