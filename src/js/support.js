var supportChatIcon = document.getElementById('support-chat');
var quickChatModal = document.getElementById('quick-chat');
var closeQuickchatButton = document.getElementById('close-quick-chat-modal');

function toggleQuickChat() {
    quickChatModal.classList.toggle('show-quick-chat');
}

supportChatIcon.onclick = function() {
    shadeOn();
    toggleQuickChat();
}

closeQuickchatButton.onclick = function() {
    shadeOff();
    toggleQuickChat();
}