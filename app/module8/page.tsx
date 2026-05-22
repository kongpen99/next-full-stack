export default async function Module8page() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <h1>ข้อความจากเรา</h1>
    );
}