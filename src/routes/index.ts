import authRoutes from "./auth.routes";

export default function routes(app: any) {
  app.use("/auth", authRoutes);
}
