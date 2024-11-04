function calculateBMI() {
    // 取得身高和體重的值
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("請輸入有效的身高和體重數值！");
        return;
    }

    // 計算 BMI
    const bmi = weight / ((height / 100) ** 2);
    fetch("https://script.google.com/macros/s/AKfycbwhatd4F_laKeT937WY3MQNyCuI0jEeBfQWzP27mB1bJJp4M4Ul7JA7G1Hmc1ldRwbipw/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "no-cors", // 避免 CORS 問題
        body: JSON.stringify({ height, weight, bmi }),
    })
    .then(() => {
        // 因為 'no-cors' 模式無法檢查回應內容，直接顯示成功
        alert("數據已儲存到 Google Sheets！");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("出現錯誤，無法儲存數據。");
    });
    
    


}