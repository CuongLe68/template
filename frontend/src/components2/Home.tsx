function Home() {
  interface Grid {
    statusCode: number,
    message: string,
    data: Array<{
        id: string,
        age: number,
        name: string,
        address: string
    }>
}
  const person: Grid = {
    statusCode: 200,
    message: "Success",
    data: [
      { id: "755785278246843", age: 17, name: "cuong1", address: "quang tri" },
      { id: "755785278246844", age: 18, name: "cuong2", address: "quang tri" },
      { id: "755785278246845", age: 19, name: "cuong3", address: "quang tri" },
    ],
  };

  return (
    <div>
      <h2>statusCode: {person.statusCode}</h2>
      <h2>message: {person.message}</h2>
      <h2>Information</h2>
      {person.data.map((student, index) => {
        return (
          <div key={index} style={{ display: "flex", width: "600px", justifyContent: "space-between", margin: "auto" }}>
            <h4>id: {student.id}</h4>
            <h4>Tên: {student.name}</h4>
            <h4>Tuổi: {student.age}</h4>
            <h4>Địa chỉ: {student["address"]}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
