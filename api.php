<?php
$db = new PDO('sqlite:db.sqlite');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $result = $db->query("SELECT * FROM tasks ORDER BY priority DESC, name ASC");
        echo json_encode($result->fetchAll(PDO::FETCH_ASSOC));
        break;
    
    case 'POST':
        $name = $_POST['name'];
        $priority = $_POST['priority'];
        if (empty($name) || empty($priority)) {
            echo json_encode(['error' => 'Task name and priority are required']);
            http_response_code(400);
            exit;
        }
        $stmt = $db->prepare("INSERT INTO tasks (name, priority) VALUES (?, ?)");
        $stmt->execute([$name, $priority]);
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $stmt = $db->prepare("DELETE FROM tasks WHERE id = ?");
        $stmt->execute([$id]);
        break;

    case 'PUT':
        parse_str(file_get_contents("php://input"), $_PUT);
        $id = $_PUT['id'];
        $completed = $_PUT['completed'];
        $stmt = $db->prepare("UPDATE tasks SET completed = ? WHERE id = ?");
        $stmt->execute([$completed, $id]);
        break;
}
