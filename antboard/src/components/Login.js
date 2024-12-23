import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import Sidebar from "./Sidebar"; 
import RepositoryCard from "./RepositoryCard"; 
const Login = () => {
  // Selected Service ko manage
  const [selectedService, setSelectedService] = useState(null);

  const handleSignIn = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        data-layer="Calendar"
        className="Calendar w-full max-w-lg bg-white rounded-xl shadow-lg border border-gray-200 flex-col justify-start items-start inline-flex overflow-hidden"
      >
        <div
          data-layer="Content"
          className="Content self-stretch px-6 py-9 border-b border-zinc-300 flex-col justify-center items-center gap-5 flex"
        >
          <div
            data-layer="Date and text"
            className="DateAndText h-32 flex-col justify-center items-center gap-9 flex"
          >
            <div
              data-layer="Frame 10"
              className="Frame10 justify-start items-center gap-3.5 inline-flex"
            >
              <div
                data-layer="CodeAnt AI"
                className="CodeantAi flex items-center text-gray-900 text-3xl font-normal font-['Satoshi'] leading-loose"
              >
                <img
                  src="./codeant_ai_logo.jpeg"
                  alt="Codeant AI Logo"
                  className="w-10 h-10 object-contain"
                />
                CodeAnt AI
              </div>
            </div>
            <div
              data-layer="Text"
              className="Text text-gray-900 text-3xl font-semibold font-['Inter'] leading-10"
            >
              Welcome to CodeAnt AI
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div
          data-layer="Main"
          className="Main self-stretch bg-white justify-center items-center inline-flex"
        >
          <div
            data-layer="Frame 1018"
            className="Frame1018 py-6 flex-col justify-center items-center gap-4 inline-flex"
          >
            {/* Sign In with GitHub */}
            <div
              data-layer="Google"
              className="Google w-full max-w-lg px-4 py-4 bg-white rounded-lg border border-gray-300 justify-center items-center gap-4 inline-flex"
              onClick={() => handleSignIn("GitHub")}
            >
              <div
                data-layer="Icon"
                className="Icon w-6 h-6 px-px py-px flex-col justify-center items-center inline-flex overflow-hidden"
              >
                <FaGithub className="w-6 h-6 text-gray-900" />
              </div>
              <div
                data-layer="Sign in with Github"
                className="SignInWithGithub text-neutral-900 text-base font-semibold font-['Inter'] leading-normal"
              >
                Sign in with Github
              </div>
            </div>

            {/* Sign In with Bitbucket */}
            <div
              data-layer="Google"
              className="Google w-full max-w-lg px-4 py-4 bg-white rounded-lg border border-gray-300 justify-center items-center gap-4 inline-flex"
              onClick={() => handleSignIn("Bitbucket")}
            >
              <div
                data-layer="Icon"
                className="Icon w-6 h-6 px-px py-px flex-col justify-center items-center inline-flex overflow-hidden"
              >
                <FaBitbucket className="w-6 h-6 text-blue-500" />
              </div>
              <div
                data-layer="Sign in with Bitbucket"
                className="SignInWithBitbucket text-neutral-900 text-base font-semibold font-['Inter'] leading-normal"
              >
                Sign in with Bitbucket
              </div>
            </div>

            {/* Sign In with Azure DevOps */}
            <div
              data-layer="Google"
              className="Google w-full max-w-lg px-4 py-4 bg-white rounded-lg border border-gray-300 justify-center items-center gap-4 inline-flex"
              onClick={() => handleSignIn("Azure DevOps")}
            >
              <div
                data-layer="Icon"
                className="Icon w-6 h-6 px-px py-px flex-col justify-center items-center inline-flex overflow-hidden"
              >
                <VscAzureDevops className="w-6 h-6 text-blue-600" />
              </div>
              <div
                data-layer="Sign in with Azure Devops"
                className="SignInWithAzureDevops text-neutral-900 text-base font-semibold font-['Inter'] leading-normal"
              >
                Sign in with Azure DevOps
              </div>
            </div>

            {/* Sign In with GitLab */}
            <div
              data-layer="Google"
              className="Google w-full max-w-lg px-4 py-4 bg-white rounded-lg border border-gray-300 justify-center items-center gap-4 inline-flex"
              onClick={() => handleSignIn("GitLab")}
            >
              <div
                data-layer="Icon"
                className="Icon w-6 h-6 px-px py-px flex-col justify-center items-center inline-flex overflow-hidden"
              >
                <FaGitlab className="w-6 h-6 text-orange-400" />
              </div>
              <div
                data-layer="Sign in with GitLab"
                className="SignInWithGitlab text-neutral-900 text-base font-semibold font-['Inter'] leading-normal"
              >
                Sign in with GitLab
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render either Sidebar or RepositoryCard */}
      {selectedService === "GitHub" || selectedService === "Bitbucket" || selectedService === "Azure DevOps" || selectedService === "GitLab" ? (
        <div className="flex flex-1 p-6">
          {/* Only render the Sidebar and RepositoryCard components based on the selected service */}
          <Sidebar />
          <RepositoryCard service={selectedService} />
        </div>
      ) : null}
    </div>
  );
};

export default Login;
