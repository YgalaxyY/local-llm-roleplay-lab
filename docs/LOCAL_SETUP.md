# Local-first setup

Start with loopback access. Configure the model backend separately and use the supported text-completion connector in SillyTavern. Do not assume an API is OpenAI-compatible unless the selected runtime documents it.

Use a fictional character and a short repeatable prompt to verify: the model answers, the selected role is applied, a new chat resets context, and the simplified UI can be restored. Record model name, license, quantization, runtime version and hardware before comparing outputs.

## LAN access

Follow [SillyTavern remote-connection documentation](https://docs.sillytavern.app/usage/remoteconnections/) for the installed version. Set up authentication/user access first, explicitly restrict trusted hosts, and limit firewall access to the private network. Do not expose the server or inference API to the public internet through router port forwarding.

The [configuration reference](https://docs.sillytavern.app/administration/config-yaml/) and [multi-user guide](https://docs.sillytavern.app/administration/multi-user/) describe the actual server controls. CleanUI is only a browser presentation preference, including its keyboard shortcut and local storage flag.

Keep server cookies, private cards, chats and credentials out of Git. The repository's examples contain no real service endpoints or passwords. Image generation, if connected separately, must remain clearly identified as generated content.

## Provenance

The supplied archive included a full upstream application, local dependencies and private runtime data. Only the custom CleanUI presentation layer was selected. During portfolio preparation its cosmetic "admin mode" was renamed "Advanced UI", its settings toggle made visible, and relabeling generated images as photographs removed. These changes affect the release copy only, not the user's installed runtime.
