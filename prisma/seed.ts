import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

const services = [
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "SEO", slug: "seo" },
  { name: "AI Automation", slug: "ai-automation" },
  { name: "Python Development", slug: "python-development" },
  { name: "E-commerce", slug: "ecommerce" },
  { name: "Full-Stack Development", slug: "full-stack-development" },
  { name: "Social Media Marketing", slug: "social-media-marketing" },
  { name: "Video Production", slug: "video-production" },
  { name: "Google Ads", slug: "google-ads" },
  { name: "Mobile App Development", slug: "mobile-app-development" },
  { name: "Graphic Design", slug: "graphic-design" },
  { name: "Shopify Development", slug: "shopify-development" },
  { name: "WordPress Development", slug: "wordpress-development" },
  { name: "Machine Learning", slug: "machine-learning" },
] as const;

const permissions = [
  { name: "services:read", description: "View services" },
  { name: "services:create", description: "Create services" },
  { name: "services:update", description: "Update services" },
  { name: "services:delete", description: "Delete services" },
] as const;

const roles = [
  { name: "ADMIN", description: "Administrator", permissions: permissions.map((p) => p.name) },
  {
    name: "CONTENT_MANAGER",
    description: "Manages service content",
    permissions: ["services:read", "services:create", "services:update"],
  },
] as const;

async function main() {
  const permissionIds = new Map<string, string>();

  for (const permission of permissions) {
    const saved = await prisma.permission.upsert({
      where: { name: permission.name },
      update: {},
      create: permission,
    });

    permissionIds.set(permission.name, saved.id);
  }

  const roleIds = new Map<string, string>();

  for (const role of roles) {
    const saved = await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: {
        name: role.name,
        description: role.description,
      },
    });

    roleIds.set(role.name, saved.id);

    for (const permissionName of role.permissions) {
      const permissionId = permissionIds.get(permissionName);

      if (!permissionId) {
        throw new Error(`Permission not found: ${permissionName}`);
      }

      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: saved.id,
            permissionId,
          },
        },
        update: {},
        create: {
          roleId: saved.id,
          permissionId,
        },
      });
    }
  }

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: {
        ...service,
        status: "PUBLISHED",
        featured: false,
      },
    });
  }

  console.log(
    `Seed complete: ${roles.length} roles, ${permissions.length} permissions, ${services.length} services.`,
  );
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });