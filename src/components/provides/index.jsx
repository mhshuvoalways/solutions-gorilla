import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../common/title";
import Description from "./Description";
import MainMenus from "./MainMenus";
import SliderComponent from "./Slider";

const items = [
  {
    id: 1,
    icon: "/icons/bar-icon.svg",
    title: "Developer Control Plane",
    description: {
      title: "Streamline Dev Workflow",
      details: [
        {
          topic: "Automate your release process",
          more: "Streamline complex deployments and rollouts, complete with built-in safety checks.",
        },
        {
          topic: "Manage environments with ease",
          more: "Seamlessly handle multiple environments for testing, staging, and production.",
        },
        {
          topic: "‍Securely store packages",
          more: "Protect your software packages in a highly secure repository.",
        },
        {
          topic: "Test and mitigate risk",
          more: "Experiment with new features and changes, using easy testing mechanisms to reduce risk",
        },
        {
          topic: "‍Instant rollbacks",
          more: "If issues arise, quickly revert to a previous working version in seconds",
        },
      ],
    },
    sliderImages: [
      "kubernetes.svg",
      "backstage.svg",
      "vscode.svg",
      "mirrord.svg",
      "github.svg",
      "gitlab.svg",
      "gitea.svg",
      "gitea.svg",
      "bitbucket.svg",
      "mattermost.svg",
      "crossplane.svg",
    ],
  },
  {
    id: 2,
    icon: "/icons/message.svg",
    title: "Integration and Delivery Plane",
    description: {
      title: "Confidently deploy in production",
      details: [
        {
          topic: "Automate your release process",
          more: "Streamline complex deployments and rollouts, complete with built-in safety checks.",
        },
        {
          topic: "Manage environments with ease",
          more: "Seamlessly handle multiple environments for testing, staging, and production.",
        },
        {
          topic: "‍Securely store packages",
          more: "Protect your software packages in a highly secure repository.",
        },
        {
          topic: "Test and mitigate risk",
          more: "Experiment with new features and changes, using easy testing mechanisms to reduce risk",
        },
        {
          topic: "‍Instant rollbacks",
          more: "If issues arise, quickly revert to a previous working version in seconds",
        },
      ],
    },
    sliderImages: [
      "argo.svg",
      "crossplane.svg",
      "harbor.svg",
      "nexus-repository.svg",
      "keptn.svg",
      "github.svg",
      "gitlab.svg",
      "open-feature.svg",
      "go-feature-flag.svg",
      "radius.svg",
      "harbor.svg",
    ],
  },
  {
    id: 3,
    icon: "/icons/head-icon.svg",
    title: "Observability Plane",
    description: {
      title: "Observe and alert on things that matters",
      details: [
        {
          topic: "Get a bird's-eye view",
          more: "Visualize everything with customizable dashboards and pinpoint issues quickly.",
        },
        {
          topic: "Dive deep into the details",
          more: "Uncover the root cause of problems with a tool designed to investigate and store system logs.",
        },
        {
          topic: "‍Never miss a beat",
          more: "Receive instant notifications when something goes wrong, so you can react promptly.",
        },
        {
          topic: "Manage your team's response",
          more: "Streamline your on-call process for a faster, more coordinated response to incidents.",
        },
      ],
    },
    sliderImages: [
      "grafana.svg",
      "beyla.svg",
      "k6.svg",
      "grafana-oncall.svg",
      "grafana-agent.svg",
      "kiali.svg",
      "open-telemetry.svg",
      "opencost.svg",
      "faro.svg",
      "beyla.svg",
      "loki.svg",
    ],
  },
  {
    id: 4,
    icon: "/icons/light-icon.svg",
    title: "Security Plane",
    description: {
      title: "Safeguard Your Platform",
      details: [
        {
          topic: "Protect your secrets",
          more: "Securely store and manage sensitive data like passwords, API keys, and certificates.",
        },
        {
          topic: "‍Control access everywhere",
          more: "Establish fine-grained rules to determine who can access what, and under what conditions.Guarantee the source: Verify the integrity of software packages and container images, preventing malicious code from entering your system.",
        },
        {
          topic: "‍‍Enforce policies",
          more: "Apply consistent security rules across your infrastructure to maintain compliance and reduce risk.",
        },
        {
          topic: "‍Manage user identities effortlessly",
          more: "Streamline login processes, enable single sign-on, and ensure robust user authentication.",
        },
        {
          topic: "‍‍Automate certificate management",
          more: "Secure communication and website traffic without the hassle of manual certificate issuance and renewal.",
        },
      ],
    },
    sliderImages: [
      "kyverno_1.svg",
      "notary.svg",
      "aqua.svg",
      "ory-hydra.svg",
      "cert-manager.svg",
      "cyberark-conjur.svg",
      "external-secret.svg",
      "hashicorp-vault.svg",
      "open-unison.svg",
      "ory-kratos.svg",
      "ory-oathkeeper.svg",
      "ory-keto.svg",
      "trivy.svg",
    ],
  },
  {
    id: 5,
    icon: "/icons/light-icon.svg",
    title: "Resource Plane",
    description: {
      title: "Resource Plane: Self-Service Power",
      details: [
        {
          topic: "Need a powerful database?",
          more: "Provision a high-performance database with just a few clicks, optimized for cloud environments.",
        },
        {
          topic: "‍Connect your applications",
          more: "Create a robust messaging system to streamline communication between different parts of your system.",
        },
        {
          topic: "‍React to events in real-time",
          more: "Trigger actions and workflows based on events happening across your infrastructure.",
        },
        {
          topic: "Expose data with blazing speed",
          more: "Instantly create APIs to access your data, empowering developers to build amazing applications",
        },
        {
          topic: "‍Deploy databases anywhere",
          more: "Tap into the power of database-as-a-service solutions, giving you instant access to databases when and where you need them.",
        },
        {
          topic: "‍‍Store data flexibly",
          more: "Set up scalable, software-defined storage to handle your growing data needs.",
        },
      ],
    },
    sliderImages: [
      "ovh.svg",
      "google-cloud.svg",
      "azure.svg",
      "aws.svg",
      "cloud-events.svg",
      "istio_1.svg",
      "argo.svg",
      "kubedb.svg",
      "kube-mq.svg",
      "object-storage-gem.svg",
      "oracle.svg",
      "digitalocean.svg",
      "linode.svg",
      "hasura.svg",
    ],
  },
];

const Provides = () => {
  const [selectItem, setSelectItem] = useState(items[0]);

  return (
    <div className="mt-28 card bg-rich-black">
      <Title
        title={"Built on Open-Source for Flexibility"}
        className={"text-center"}
      />
      <div className="mt-20 mx-auto flex flex-wrap justify-center gap-5 lg:gap-20 relative">
        <div className="w-full lg:w-4/12 space-y-5">
          {items.map((item, index) => (
            <MainMenus
              setSelectItem={setSelectItem}
              item={item}
              key={index}
              selectItem={selectItem}
            />
          ))}
        </div>
        <div className="w-full lg:w-5/12">
          <Fade key={selectItem.id}>
            <Description selectItem={selectItem} />
            <SliderComponent selectItem={selectItem} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Provides;
