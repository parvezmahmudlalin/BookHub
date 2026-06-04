"use client";


import { authClient } from "@/lib/auth-client";
import { Avatar, Card, CardBody, Chip } from "@heroui/react";

const ProfilePage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
   <Card>
     <div className="min-h-[80vh] bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-xl border">
          {/* Cover Section */}
          <div className="h-40 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600" />

          <div className="relative">
            {/* Avatar */}
            <div className="-mt-20 flex flex-col items-center">
              <Avatar
                src={user?.image}
                className="w-32 h-32 border-4 border-white shadow-lg"
              />

              <h1 className="text-3xl font-bold mt-4">
                {user?.name}
              </h1>

              <p className="text-default-500">
                {user?.email}
              </p>

              <Chip color="primary" variant="flat" className="mt-3">
                BookHub Member
              </Chip>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="border rounded-xl p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">12</h3>
                <p className="text-default-500">Books Borrowed</p>
              </div>

              <div className="border rounded-xl p-5 text-center">
                <h3 className="text-3xl font-bold text-green-600">8</h3>
                <p className="text-default-500">Books Returned</p>
              </div>

              <div className="border rounded-xl p-5 text-center">
                <h3 className="text-3xl font-bold text-purple-600">4</h3>
                <p className="text-default-500">Currently Reading</p>
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-8 border rounded-xl p-5">
              <h2 className="text-xl font-semibold mb-4">
                Account Information
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-default-500">Full Name</span>
                  <span className="font-medium">{user?.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-default-500">Email</span>
                  <span className="font-medium">{user?.email}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-default-500">Membership</span>
                  <span className="font-medium text-green-600">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Update Profile */}
            <div className="flex justify-center mt-8">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Update Profile
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
   </Card>
  );
};

export default ProfilePage;