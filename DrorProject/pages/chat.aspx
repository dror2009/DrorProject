<%@ Page Title="Chat" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="chat.aspx.cs" Inherits="DrorProject.pages.chat" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/scripts/userTracker.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: left;
            margin: 0;
            padding: 0;
            padding-top: 35px;
        }

        .chat-container {
            max-width: 1200px;
            margin: auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            height: 80vh; /* Makes chat container take up most of the page */
        }

        .chat {
            list-style: none;
            padding: 0;
            margin: 0;
            flex-grow: 1; /* Makes messages take available space */
            overflow-y: auto;
            max-height: 100%;
        }

            .chat li {
                margin: 5px 0;
                padding: 5px;
                background: #f1f1f1;
                border-radius: 5px;
                word-wrap: break-word; /* Ensures long words break */
                white-space: pre-wrap; /* Preserves spaces and line breaks */
                max-width: 100%; /* Prevents messages from exceeding container width */
            }


        .chat-input-container {
            display: flex;
            align-items: center;
            padding: 10px;
            background: #fff;
            position: sticky;
            bottom: 0;
            left: 0;
            right: 0;
        }

            .chat-input-container input {
                flex-grow: 1;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }

            .chat-input-container button {
                font-size: 16px;
                margin-left: 5px;
                padding: 10px;
                cursor: pointer;
                border: none;
                background: #007bff;
                color: white;
                border-radius: 5px;
            }

                .chat-input-container button:hover {
                    background: #0056b3;
                }

        #statusMessage {
            color: red;
            font-weight: bold;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">
        <div class="chat-container">
            <ul id="messagesList" class="chat" runat="server"></ul>
            <button onclick="goDown()">Scroll down</button>
            <div class="chat-input-container">
                <input type="text" id="messageInput" placeholder="Type a message..." maxlength="200" />
                <button onclick="sendMessage()">📩 Send</button>
            </div>

            <p id="statusMessage"></p>
            <h2 id="userCount">👥 Connected users: 0</h2>


        </div>

        <script>
            function loadMessages() {
                var messagesListId = "<%= messagesList.ClientID %>";
                var messageList = $("#" + messagesListId);

                if (!messageList.length) {
                    console.error("Error: messagesList element not found.");
                    return;
                }

                $.get("/ashx/chatHandler.ashx?action=getMessages", function (data) {
                    messageList.empty();
                    data.forEach(msg => {
                        messageList.append(`<li><strong>${msg.Username}:</strong> ${msg.Message} <span>(${msg.Timestamp})</span></li>`);
                    });
                });
            }
            function goDown() {
                var messagesListId = "<%= messagesList.ClientID %>";
                var messageList = $("#" + messagesListId);
                messageList.scrollTop(messageList[0].scrollHeight);
            }
            function sendMessage() {
                var messagesListId = "<%= messagesList.ClientID %>";
                var messageList = $("#" + messagesListId);
                var message = $("#messageInput").val();
                if (message.trim() !== "") {
                    $.post("/ashx/chatHandler.ashx?action=sendMessage", { Message: message }, function (response) {
                        $("#statusMessage").text(response);
                        $("#messageInput").val('');
                        loadMessages();
                        messageList.scrollTop(messageList[0].scrollHeight);
                    });
                } else {
                    $("#statusMessage").text("❌ Message cannot be empty.");
                }
                goDown();
            }

            // Send message when pressing "Enter"
            $("#messageInput").keypress(function (event) {
                if (event.which === 13) {
                    event.preventDefault();
                    sendMessage();
                }
            });

            $(document).ready(function () {
                loadMessages();
                setTimeout(() => {
                    var messageList = $("#" + "<%= messagesList.ClientID %>");
                    messageList.scrollTop(messageList[0].scrollHeight);
                }, 500); // Ensures it scrolls after messages load
            });
            messageList.scrollTop(messageList[0].scrollHeight);
            setInterval(loadMessages, 2000);
        </script>

    </div>
</asp:Content>
