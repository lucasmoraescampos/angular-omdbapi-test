# Verions
- Angular 16
- Node 18

# Build application with docker

```
docker build -t filmexapp .
docker run -p 8080:80 --name filmexapp filmexapp
```

### The application will be available at:
http://localhost:8080