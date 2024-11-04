// script.js

function calculateBMI() {
    // 取得身高和體重的值
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("result");

    // 驗證輸入值是否有效
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "請輸入有效的身高和體重數值！";
        resultDiv.style.color = "red";
        return;
    }

    // 計算 BMI
    const bmi = weight / ((height / 100) ** 2);
    let status;

    // 根據 BMI 數值決定健康狀態
    if (bmi < 18.5) {
        status = "偏輕";
        resultDiv.style.color = "blue";
    } else if (bmi < 24) {
        status = "正常";
        resultDiv.style.color = "green";
    } else {
        status = "過重";
        resultDiv.style.color = "red";
    }

    // 顯示結果
    resultDiv.textContent = `您的 BMI 是 ${bmi.toFixed(2)}，狀態：${status}`;
}
