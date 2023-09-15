function initializeUserSelect() {
  const selects = document.getElementsByClassName('user_id');
  const selectsArray = Array.from(selects);

  selectsArray.forEach(function(select) {
    select.addEventListener('mousedown', function(e) {
      var option = e.target;

      if (option.tagName === 'OPTION') {
        // クリックされたオプションがすでに選択されている場合
        if (option.selected) {
          // 選択を解除
          option.selected = false;
          option.style.backgroundColor = "";

          // クリックされたオプションの値（ユーザーID）を取得
          var userId = option.value;

          // 全てのセレクトボックスをループして、非表示にしたオプションを再表示する
          selectsArray.forEach(function(otherSelect) {
            if (otherSelect !== select) {
              var allOptions = otherSelect.querySelectorAll('option[value="' + userId + '"]');
              allOptions.forEach(function(thisOption) {
                thisOption.style.display = "";
              });
            }
          });
        } else {
          // 選択されていない場合、選択を追加
          option.selected = true;
          option.style.backgroundColor = "skyblue";

          var selectedOptions = Array.from(select.selectedOptions);

          // 選択されたオプションをループして非表示にする
          selectedOptions.forEach(function(selectedOption) {
            var userId = selectedOption.value;
            var allOptions = document.querySelectorAll('.user_id option[value="' + userId + '"]');

            // 全ての同じ userId のオプションを非表示にする
            allOptions.forEach(function(thisOption) {
              if (selectedOption && thisOption !== selectedOption) {
                thisOption.style.display = "none";
              }
            });
          });
        }

        // イベントをキャンセルしてデフォルトの選択動作を防ぎます
        e.preventDefault();
      }
    });
  });
}

// TurboLinksのロード完了時に初期化関数を実行
document.addEventListener("turbo:load", initializeUserSelect);