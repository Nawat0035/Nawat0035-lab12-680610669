/*
 * อย่าลืมเปลี่ยน username และ type ให้เป็นของตัวเอง
 */

interface SidebarProps {
  username: string;
  type: string;
}

export default function Sidebar({ username, type }: SidebarProps) {
  return (
    <aside
      className="d-flex flex-column p-4 bg-primary min-vh-100"
      data-bs-theme="dark"
    >
      <h5 className="text-white">Note App</h5>

      <p className="text-white">Todo List</p>
      <p className="text-white">My Stuffs</p>

      <div className="mt-auto">
        <p className="text-white m-0">
          {username} : {type}
        </p>
      </div>
    </aside>
  );
}