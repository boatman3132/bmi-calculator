document.addEventListener("DOMContentLoaded", function() {
    // 在 DOM 完全加載後設置事件監聽器
    const weightInput = document.getElementById("weight");

    // 當用戶在 "weight" 輸入框中按下鍵時觸發
    weightInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {  // 檢查是否按下 Enter 鍵
            calculateAndDisplayBMI();
        }
    });
});

function calculateAndDisplayBMI() {
    // 取得身高和體重的值
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // 檢查輸入是否有效
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("請輸入有效的身高和體重數值！");
        return;
    }

    // 計算 BMI
    const bmi = weight / ((height / 100) ** 2);

    // 顯示 BMI 結果
    const resultElement = document.getElementById("result");
    resultElement.textContent = `您的 BMI 是：${bmi.toFixed(2)}`;

    // 提交數據到 Google Sheets
    uploadDataToGoogleSheet(height, weight, bmi);
}

function uploadDataToGoogleSheet(height, weight, bmi) {
    fetch("https://script.google.com/macros/s/AKfycbwhatd4F_laKeT937WY3MQNyCuI0jEeBfQWzP27mB1bJJp4M4Ul7JA7G1Hmc1ldRwbipw/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "no-cors", // 避免 CORS 問題
        body: JSON.stringify({ height, weight, bmi }),
    })
    .then(() => {
        // 由於 no-cors 模式，我們無法查看回應內容，僅打印日志以供調試
        console.log("數據已提交到 Google Sheets");
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
