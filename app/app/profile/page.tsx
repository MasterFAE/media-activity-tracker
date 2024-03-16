import React from "react";
import SavedCard from "@/components/SavedCard/SavedCard";
import { progress, savedMock, userMock } from "@/types/mock";
import { Badge } from "@/components/ui/badge";
import ProfileSettingsDropdown from "@/components/Profile/ProfileSettingsDropdown";
import UserAvatar from "@/components/UserAvatar";

import CreateMediaDialog from "@/components/Profile/CreateMediaDialog";

const ProfilePage = () => {
  const user = userMock;
  return (
    <main className="p-12 flex flex-col w-full">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <UserAvatar username={user.username} avatarUrl={user.avatarUrl} />
            <div className="flex items-center gap-2">
              <h1 className="text-2xl">{user.username}</h1>
              <ProfileSettingsDropdown user={null} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Badge>{savedMock.length} Tracker</Badge>
          <Badge className="ml-1">{progress.length} Activity</Badge>
        </div>
        <p className="mt-2 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat
          cumque recusandae laudantium ad quibusdam numquam, earum incidunt
          iusto qui sit aspernatur delectus dolores, esse expedita quia quod
          nostrum iste.
        </p>
      </div>

      <div>
        <div className="flex items-center space-x-3 mt-12 mb-2">
          <h2 className="text-2xl font-bold">Progress</h2>
          <CreateMediaDialog />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedMock.map((item) => (
            <SavedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
