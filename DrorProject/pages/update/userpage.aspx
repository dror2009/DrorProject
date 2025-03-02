<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="userpage.aspx.cs" Inherits="DrorProject.pages.update.userpage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content" style="max-width: 600px;">
        <h1>User control for <%=Session["loggedUser"] %>: </h1>
        <h2><a href="update.aspx" style="font-size: 1.6rem; color: #333;">Update user data.</a></h2>
        <%if ((string)Session["userAccess"] == "admin")
            {%>
        <h2><a href="../admin/adminMenu.aspx" style="font-size: 1.6rem; color: #333;">Admin Control Panel</a></h2>
        <%} %>
    </div>
</asp:Content>
