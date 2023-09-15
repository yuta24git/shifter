// ページがロードされたときに実行する初期化関数
function initializeRoleSelect() {
  const userSelect = document.getElementById("user_id");
  const userName = document.getElementById("user-name");
  const userRoles = document.getElementById("user-roles");
  const userDetails = document.getElementById("user-details");
  const roleId = document.getElementById("role_ids");

  // ユーザー選択の変更を監視するイベントリスナー
  userSelect.addEventListener("change", function() {
    const selectedUserId = userSelect.value;
    const selectedOption = userSelect.options[userSelect.selectedIndex];
    const selectedUserName = selectedOption.text;
  
    if (selectedUserId) {
      // ユーザー名を設定
      const userNameElement = document.createElement("span");
      userNameElement.textContent = `${selectedUserName}さんに登録されている役割`;
      userName.innerHTML = "";
      userName.appendChild(userNameElement);
  
      //ユーザーのロールを表示
      fetch(`/user_roles?selected_user_id=${selectedUserId}`)
        .then(response => response.text())
        .then(data => {
          userRoles.innerHTML = data;
        }
      );

      //
      fetch(`/role_select?selected_user_id=${selectedUserId}`)
        .then(response => response.text())
        .then(data =>{
          const options = roleId.options
          for ( let i = options.length - 1; 1 <= i; --i) {
              roleId.removeChild(options[i]);
          }
          JSON.parse(data).forEach((role) => {
            const option = document.createElement('option');
            option.value = role[0];
            option.textContent = role[1];
            roleId.appendChild(option);
          });
        })
  
      // ユーザー詳細情報を表示
      userDetails.style.display = "block";
      userName.style.display = "block";
      userRoles.style.display = "block";
    } else {
      // ユーザーが未選択の場合、詳細情報をクリアして非表示にする
      userName.innerHTML = "";
      userRoles.innerHTML = "";
      userName.style.display = "none";
      userRoles.style.display = "none";
    }
  });
};

// TurboLinksのロード完了時に初期化関数を実行
document.addEventListener("turbo:load", initializeRoleSelect);


function initializeUserSelect() {
  const roleSelect = document.getElementById('role_ids');
  roleSelect.addEventListener('mousedown', function(e) {
    var option = e.target;

    if (option.tagName === 'OPTION') {
      // クリックされたオプションがすでに選択されている場合
      if (option.selected) {
        // 選択を解除
        option.selected = false;
        option.style.backgroundColor = "";
      } else {
        // 選択されていない場合、選択を追加
        option.selected = true;
        option.style.backgroundColor = "skyblue";
      }

      // イベントをキャンセルしてデフォルトの選択動作を防ぎます
      e.preventDefault();
    }
  });
};


// TurboLinksのロード完了時に初期化関数を実行
document.addEventListener("turbo:load", initializeUserSelect);