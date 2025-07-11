# --------------------------
# Giai đoạn 1: Build ứng dụng
# --------------------------
FROM node:20 AS builder

WORKDIR /app

# Copy file package để cài dependencies trước (tăng tốc cache)
COPY package*.json ./

RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Build project (ra thư mục dist)
RUN npm run build

# --------------------------
# Giai đoạn 2: Serve bằng nginx
# --------------------------
FROM nginx:stable-alpine

# Xóa nội dung mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy bản build từ giai đoạn builder vào nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Tuỳ chọn) Copy file nginx.conf nếu cần cấu hình lại
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Mở cổng 80 để truy cập web
EXPOSE 80

# Chạy nginx ở foreground (giữ container không tắt)
CMD ["nginx", "-g", "daemon off;"]
