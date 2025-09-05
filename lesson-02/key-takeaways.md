# Key Takeaways - Lesson 02: REST API

## REST API Basics

- REST API hoạt động theo mô hình **client - server**.
- Request được chia thành nhiều thành phần giúp:
  - Gửi/nhận dữ liệu hiệu quả hơn (nhỏ gọn, dễ xử lý).
  - Rõ ràng về ý định và chức năng.
  - Linh hoạt, dễ tái sử dụng.

## HTTP Request Components

- **Method (Verb):** GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS.
- **URL:** gồm scheme (http/https), domain, path, query, fragment.
- **Header:** metadata kèm theo request, các nhóm chính:
  - Authorization, Content, Caching, Security, CORS.
- **Body:** chứa dữ liệu (JSON/XML/Form-Data), dùng cho đăng ký, cập
  nhật, tìm kiếm.

## HTTP Response Components

- **Status Code:** 5 nhóm chính:
  - 1xx (informational), 2xx (success), 3xx (redirection), 4xx
    (client error), 5xx (server error).
- **Header:** metadata từ server (ví dụ: Content-Type).
- **Body:** dữ liệu trả về, thường ở dạng JSON.

## Authentication & Authorization

- **Authentication:** xác minh danh tính (username/password, token).
- **Authorization:** phân quyền truy cập sau khi xác thực.
- Các khái niệm chính:
  - Username/Password.
  - Session & Cookie (stateful auth).
  - Base64 Encoding.
  - Token (JWT, Bearer Token, Session Token).
  - Refresh Token.
  - API Key.

## Authentication Methods

- **Session-Cookie Auth:** server giữ session, client lưu cookie.
- **Basic Auth:** username:password mã hóa Base64, gửi trong header.
- **API Key:** chuỗi ký tự định danh ứng dụng/người dùng, gửi qua
  header hoặc query param.

## Javascript Basics

- **Biến:** khai báo bằng `const`, đặt tên theo camelCase.
- **In dữ liệu:** dùng `console.log()`.
- **Câu điều kiện:** if, if...else, if...else if, switch...case.
