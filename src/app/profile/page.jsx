"use client";

import UpdateProfile from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Chip } from "@heroui/react";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <Card>
      <div className="min-h-[80vh] bg-slate-50 py-6 sm:py-10 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border">
            {/* Cover */}
            <div className="h-32 sm:h-40 bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500" />

            <div className="relative p-4 sm:p-6">
              {/* Avatar */}
              <div className="-mt-20 sm:-mt-24 flex flex-col items-center">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-center">
                  {user?.name}
                </h1>

                <p className="text-gray-500 text-center break-all">
                  {user?.email}
                </p>

                <Chip color="primary" variant="flat" className="mt-3">
                  BookHub Member
                </Chip>
              </div>

              {/* Account Info */}
              <div className="mt-8 border rounded-xl p-4 sm:p-5">
                <h2 className="text-xl font-semibold mb-4">
                  Account Information
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-gray-500 font-medium">Full Name</span>

                    <span className="font-medium break-words text-left sm:text-right">
                      {user?.name}
                    </span>
                  </div>

                  <div className="border-t" />

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-gray-500 font-medium">Email</span>

                    <span className="font-medium break-all text-left sm:text-right">
                      {user?.email}
                    </span>
                  </div>

                  <div className="border-t" />

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-gray-500 font-medium">
                      Membership
                    </span>

                    <span className="font-medium text-green-600 text-left sm:text-right">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Update Profile Button */}
              <div className="flex justify-center mt-8">
                <UpdateProfile />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default ProfilePage;
