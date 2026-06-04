"use client";

import React from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Avatar,
} from "@heroui/react";
import { BiEdit, BiImage, BiUser } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      <Button
        color="primary"
        size="lg"
        className="font-semibold shadow-md"
      >
        <BiEdit className="text-lg" />
        Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-lg rounded-3xl overflow-hidden">
            <Modal.CloseTrigger />

            {/* Header */}
            <div className="bg-linear-to-r from-blue-300 via-indigo-600 to-purple-500 p-8 text-white">
              <div className="flex flex-col items-center gap-3">
                <Avatar className="h-20 w-20 border-4 border-white/30" />

                <div className="text-center">
                  <h2 className="text-2xl font-bold">
                    Update Profile
                  </h2>
                  <p className="text-sm text-white/80">
                    Keep your account information up to date
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="border rounded-2xl p-5 shadow-sm"
              >
                <form onSubmit={onSubmit} className="space-y-5">

                  {/* NAME */}
                  <TextField className="w-full">
                    <Label className="font-medium">
                      Full Name
                    </Label>

                    <Input
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </TextField>

                  {/* IMAGE */}
                  <TextField className="w-full">
                    <Label className="font-medium">
                      Profile Image URL
                    </Label>

                    <Input
                      name="image"
                      placeholder="Image URL"
                    />
                  </TextField>

                  {/* BUTTONS */}
                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      slot="close"
                      variant="flat"
                      color="default"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      color="primary"
                      className="px-6 font-semibold"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;