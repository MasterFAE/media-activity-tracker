import SavedCard from "@/components/SavedCard/SavedCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { progress, savedMock } from "@/model/mock";
import { Badge } from "@/components/ui/badge";
import ProfileSettingsDropdown from "@/components/Profile/ProfileSettingsDropdown";

const username = "shadcn";
const ProfilePage = () => {
  return (
    <main className="p-12 flex flex-col w-full">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl">{username}</h1>
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
        <h2 className="text-xl font-bold mt-12 my-2">Progress</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedMock.map((item) => (
            <SavedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;