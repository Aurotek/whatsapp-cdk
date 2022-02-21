import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Alexis Cervantes",
  authorAddress: "acervantes@auronix.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  name: "whatsapp-cdk",
  projenrcTs: true,
  repositoryUrl: "https://github.com/acervantes/whatsapp-cdk.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();