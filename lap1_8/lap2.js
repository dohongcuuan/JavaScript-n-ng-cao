console.log("Lab2.1");
// Câu 1
const Event = new Map([
  [23, "Ghi Bàn"],
  [32, "Thẻ Vàng"],
  [33, "Thẻ Đỏ"],
  [42, "Ghi Bàn"],
  [54, "Đổi Người"],
  [64, "Thẻ Vàng"],
  [78, "Ghi Bàn"],
  [87, "Ghi Bàn"],
  [89, "Thẻ Vàng"],
]);
const EventList = [...new Set(Event.values())];
console.log(EventList);
// Câu 2
Event.delete(64);
// Câu 3
console.log(
  `một sự kiện xảy ra trung bình sau mỗi ${90 / Event.size} phút`
);
// Câu 4
for (const [min, EventList] of Event) {
  const half = min <= 45 ? "Hiệp 1" : "Hiệp 2";
  console.log(`${half} phút ${min}; ${EventList}`);
}
console.log("Lab2.2");


document.querySelector('button').addEventListener("click",function()
{
    const textarea = document.querySelector('textarea').value;
    const rows = textarea.split('\n')
    
    for (const row of rows)
    {
       const [first, second] = row.toLowerCase() .trim() .split('_');
       const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
       )}`;
       console.log(output.padEnd(20, ''));
    }
})
console.log("Lab2.4");
const header = document.querySelector("h1");
header.style.color = "red";
document.querySelector("body").addEventListener("click", function () {
  header.style.color = "blue";
});