"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
    if (session?.user.id) fetchPosts();
  }, [session]);

  const handleEdit = () => {};

  const handleDelete = async () => {};

  return (
    <div>
      <div></div>
      <Profile
        name="My"
        desc="Welcome to your profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;
