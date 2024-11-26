function danhsach() {
    const thanhvien = [
        {Hovaten: "Nguyễn Việt Dương",Gioitinh: "Nam", Quequan: "Hà Nội" },
        {Hovaten: "Trần Đình Hưng Thịnh",Gioitinh: "Nam", Quequan: "Nghệ An" },
        {Hovaten: "Trần Minh Long",Gioitinh: "Nam", Quequan: "Nam Định" },
        {Hovaten: "Nguyễn Nam Khánh",Gioitinh: "Nam", Quequan: "Hà Nội" },
        {Hovaten: "Đào Thế Vũ",Gioitinh: "Nam", Quequan: "Bắc Ninh" },
        {Hovaten: "Nguyễn Quang Huy",Gioitinh: "Nam", Quequan: "Hà Tĩnh" },
        {Hovaten: "Nguyễn Công Mạnh",Gioitinh: "Nam", Quequan: "Hà Tĩnh" },
    ];
const table = document.getElementById('danhsach');
    
table.innerHTML =`
    <tr>
        <th>Họ và tên</th>
        <th>Giới tính</th>
        <th>Quê quán</th>
    </tr>
`;
for (const tv of thanhvien) {
const row = `
    <tr>
        <td>${tv.Hovaten}</td>
        <td>${tv.Gioitinh}</td>
        <td>${tv.Quequan}</td>
    </tr>
`;
table.innerHTML += row;
}
}