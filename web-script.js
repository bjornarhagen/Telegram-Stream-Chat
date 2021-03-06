javascript: (function () {
  const $ = (e) => document.querySelector(e);
  const $a = (e) => document.querySelectorAll(e);
  $a(".tg_page_head, .im_bottom_panel_wrap, .im_dialogs_col_wrap").forEach((e) => (e.style.display = "none"));
  $("html").style.backgroundColor = "#0f0";
  setInterval(() => {
    $a(".im_history_col_wrap").forEach((e) => {
      e.style.width = "100%";
    });
    $a("a.im_message_photo_thumb").forEach((e) => {
      e.style.width = "100%";
      e.style.height = "70vh";
    });
    $a("a.im_message_photo_thumb > img").forEach((e) => {
      e.style.width = "100%";
      e.style.height = "100%";
      e.style.objectFit = "contain";
    });
    $a(".img_gif_with_progress_wrap").forEach((e) => {
      if (e.querySelector(".img_gif_meta.ng-hide") == null && !e.dataset.hasBeenClicked) {
        e.dataset.hasBeenClicked = true;
        e.click();
      }
    });
    $a(".emoji").forEach((e) => {
      e.style.transform = "scale(2)";
      e.style.marginLeft = "16px";
      e.style.lineHeight = "24px";
    });
  }, 1000);
  setInterval(() => {
    $(".im_history_scrollable_wrap").scrollTo({
      left: 0,
      top: $(".im_history_scrollable_wrap").scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
})();
