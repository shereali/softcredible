<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed roles, permissions, and the initial admin user.
     */
    public function run(): void
    {
        $permissions = [
            'content.manage',
            'leads.manage',
            'settings.manage',
        ];

        foreach ($permissions as $permission) {
            Permission::findOrCreate($permission, 'web');
        }

        $adminRole = Role::findOrCreate('admin', 'web');
        $adminRole->syncPermissions($permissions);

        $admin = User::firstOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@softcredible.com')],
            [
                'name' => 'Softcredible Admin',
                'password' => Hash::make(env('ADMIN_PASSWORD', 'password')),
            ]
        );

        $admin->assignRole('admin');
    }
}
