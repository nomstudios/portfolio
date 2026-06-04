import { useEffect, useState, type ReactNode } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Sun, Moon } from "lucide-react";
import { serviceAreas } from "@/data/portfolio";

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetail,
});

function getToolIcon(name: string): ReactNode {
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  switch (normName) {
    case "docker":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 256 256" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"/>
        </svg>
      );
    case "githubactions":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z" />
        </svg>
      );
    case "jenkins":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M2.872 24h-.975a3.866 3.866 0 01-.07-.197c-.215-.666-.594-1.49-.692-2.154-.146-.984.78-1.039 1.374-1.465.915-.66 1.635-1.025 2.627-1.62.295-.179 1.182-.624 1.281-.829.201-.408-.345-.982-.49-1.3-.225-.507-.345-.937-.376-1.435-.824-.13-1.455-.627-1.844-1.185-.63-.925-1.066-2.635-.525-3.936.045-.103.254-.305.285-.463.06-.308-.105-.72-.12-1.048-.06-1.692.284-3.15 1.425-3.66.463-1.84 2.113-2.453 3.673-3.367.58-.342 1.224-.562 1.89-.807 2.372-.877 6.027-.712 7.994.783.836.633 2.176 1.97 2.656 2.939 1.262 2.555 1.17 6.825.287 9.934-.12.421-.29 1.032-.533 1.533-.168.35-.689 1.05-.625 1.36.064.314 1.19 1.17 1.432 1.395.434.422 1.26.975 1.324 1.5.07.557-.248 1.336-.41 1.875-.217.721-.436 1.441-.654 2.131H2.87zm11.104-3.54c-.545-.3-1.361-.622-2.065-.757-.87-.164-.78 1.188-.75 1.994.03.643.36 1.316.51 1.744.076.197.09.41.256.449.3.068 1.29-.326 1.575-.479.6-.328 1.064-.844 1.574-1.189.016-.17.016-.34.03-.508a2.648 2.648 0 00-1.095-.277c.314-.15.75-.15 1.035-.332l.016-.193c-.496-.03-.69-.254-1.021-.436zm7.454 2.935a17.78 17.78 0 00.465-1.752c.06-.287.215-.918.178-1.176-.059-.459-.684-.799-1.004-1.086-.584-.525-.95-.975-1.56-1.469-.249.375-.78.615-.983.914 1.447-.689 1.71 2.625 1.141 3.69.09.329.391.45.514.735l-.086.166h1.29c.013 0 .03 0 .044.014zm-6.634-.012c-.05-.074-.1-.135-.15-.209l-.301.195h.45zm2.77 0c.008-.209.018-.404.03-.598-.53.029-.825-.48-1.196-.527-.324-.045-.6.361-1.02.195-.095.105-.183.227-.284.316.154.18.295.375.424.584h.815c.014-.164.135-.285.3-.285.165 0 .284.121.284.27h.66zm2.116 0c-.314-.479-.947-.898-1.68-.555l-.03.541h1.71zm-8.51 0l-.104-.344c-.225-.72-.36-1.26-.405-1.68-.914-.436-1.875-.87-2.654-1.426-.15-.105-1.109-1.35-1.23-1.305-1.739.676-3.359 1.86-4.814 2.984.256.557.48 1.141.69 1.74h8.505zm8.265-2.113c-.029-.512-.164-1.56-.48-1.74-.66-.39-1.846.78-2.34.943.045.15.135.271.15.48.285-.074.645-.029.898.092-.299.03-.629.03-.824.164-.074.195.016.48-.029.764.69.197 1.5.303 2.385.332.164-.227.225-.645.211-1.082zm-4.08-.36c-.044.375.046.51.12.943 1.26.391 1.034-1.74-.135-.959zM8.76 19.5c-.45.457 1.27 1.082 1.814 1.115 0-.29.165-.564.135-.77-.65-.118-1.502-.042-1.945-.347zm5.565.215c0 .043-.061.03-.068.064.58.451 1.014.545 1.802.51.354-.262.67-.563 1.043-.807-.855.074-1.931.607-2.774.23zm3.42-17.726c-1.606-.906-4.35-1.591-6.076-.731-1.38.692-3.27 1.84-3.899 3.292.6 1.402-.166 2.686-.226 4.109-.018.757.36 1.42.391 2.242-.2.338-.825.38-1.26.356-.146-.729-.4-1.549-1.155-1.63-1.064-.116-1.845.764-1.89 1.683-.06 1.08.833 2.864 2.085 2.745.488-.046.608-.54 1.139-.54.285.57-.445.75-.523 1.154-.016.105.06.511.104.705.233.944.744 2.16 1.245 2.88.635.9 1.884 1.051 3.229 1.141.24-.525 1.125-.48 1.706-.346-.691-.27-1.336-.945-1.875-1.529-.615-.676-1.23-1.41-1.261-2.28 1.155 1.604 2.1 3 4.2 3.704 1.59.525 3.45-.254 4.664-1.109.51-.359.811-.93 1.17-1.439 1.35-1.936 1.98-4.71 1.846-7.394-.06-1.111-.06-2.221-.436-2.955-.389-.781-1.695-1.471-2.475-.781-.15-.764.63-1.23 1.545-.96-.66-.854-1.336-1.858-2.266-2.384zM13.58 14.896c.615 1.544 2.724 1.363 4.505 1.323-.084.194-.256.435-.465.515-.57.232-2.145.408-2.937-.012-.506-.27-.824-.873-1.102-1.227-.137-.172-.795-.608-.012-.609zm.164-.87c.893.464 2.52.517 3.731.48.066.267.066.593.068.913-1.55.08-3.386-.304-3.794-1.395h-.005zm6.675-.586c-.473.9-1.145 1.897-2.539 1.928-.023-.284-.045-.735 0-.904 1.064-.103 1.727-.646 2.543-1.017zm-.649-.667c-1.02.66-2.154 1.375-3.824 1.21-.351-.31-.485-1-.14-1.458.181.313.06.885.57.97.944.165 2.038-.579 2.73-.84.42-.713-.046-.976-.42-1.433-.782-.93-1.83-2.1-1.802-3.51.314-.224.346.346.391.45.404.96 1.424 2.175 2.174 3 .18.21.48.39.51.524.092.39-.254.854-.209 1.11zm-13.439-.675c-.314-.184-.393-.99-.768-1.01-.535-.03-.438 1.05-.436 1.68-.37-.33-.435-1.365-.164-1.89-.308-.15-.445.164-.618.284.22-1.59 2.34-.734 1.99.96zM4.713 5.995c-.685.756-.54 2.174-.459 3.188 1.244-.785 2.898.06 2.883 1.394.595-.016.223-.744.115-1.215-.353-1.528.592-3.187.041-4.59-1.064.084-1.939.52-2.578 1.215zm9.12 1.113c.307.562.404 1.148.84 1.57.195.19.574.424.387.95-.045.121-.365.391-.551.45-.674.195-2.254.03-1.721-.81.563.015 1.314.36 1.732-.045-.314-.524-.885-1.53-.674-2.13zm6.198-.013h.068c.33.668.6 1.375 1.004 1.965-.27.628-2.053 1.19-2.023.057.39-.17 1.05-.035 1.395-.25-.193-.556-.48-1.006-.434-1.771zm-6.927-1.617c-1.422-.33-2.131.592-2.56 1.553-.384-.094-.231-.615-.135-.883.255-.701 1.28-1.633 2.119-1.506.359.057.848.386.576.834zM9.642 1.593c-1.56.44-3.56 1.574-4.2 2.974.495-.07.84-.321 1.33-.351.186-.016.428.074.641.015.424-.104.78-1.065 1.102-1.41.31-.345.685-.496.94-.81.167-.09.409-.074.42-.33-.073-.075-.15-.135-.232-.105v.017z" />
        </svg>
      );
    case "gitlabcicd":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.92l2.35-7.24a.84.84 0 0 1 .8-.58h.02a.84.84 0 0 1 .79.58L7 12.75h10l2-6.52a.84.84 0 0 1 .79-.58h.02a.84.84 0 0 1 .8.58l2.35 7.24a.84.84 0 0 1-.3.92z" />
        </svg>
      );
    case "kubernetes":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
        </svg>
      );
    case "visualstudiocode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-8.14 6.37 7.98 6.47 8.18-6.32a1.494 1.494 0 0 0 .625-1.198V3.765a.664.664 0 0 0-.05-.264zM2.36 4.634l-.44.025c-.88.05-1.57.81-1.57 1.69v11.23c0 .88.69 1.64 1.57 1.69l.44.025 5.56 2.33a.664.664 0 0 0 .86-.59V2.924a.664.664 0 0 0-.86-.59zM8.38 18.06l7.98 6.47 8.18-6.32a1.494 1.494 0 0 0 .625-1.198V3.765a.664.664 0 0 0-.05-.264l-4.94 2.37-7.98-6.47-8.18 6.32a1.494 1.494 0 0 0-.625 1.198v10.597c0 .54.29 1.04.75 1.32z" />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8l-6 8h4" />
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
        </svg>
      );
    case "flutter":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M14 2L6 10l8 8" />
          <path d="M18 10l-4 4 4 4" />
        </svg>
      );
    case "androidstudio":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.5 0 4.8-.9 6.6-2.5l-2.8-2.8c-1 .8-2.3 1.3-3.8 1.3-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.8.5 3.8 1.3l2.8-2.8C16.8 2.9 14.5 2 12 2z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    case "swift":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M21 8.5C18.5 12 15 13 12 13c-4 0-7-2-9-5 2.5 5 6.5 7.5 10 7.5 3 0 6-1 8-4z" />
          <path d="M15 15.5c-2.5 2-6 2.5-8.5 1 4 1 7-1 8.5-1z" />
        </svg>
      );
    case "adobeaftereffects":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 16V8h2.5c1 0 1.5.5 1.5 1.5v2c0 1-.5 1.5-1.5 1.5H7M13 16h4M13 12h3" />
        </svg>
      );
    case "geolayers3":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "helium":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      );
    case "redgiantmir":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "googleearthstudio":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "arcgispro":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <polygon points="12 2 2 22 12 17 22 22 12 2" />
        </svg>
      );
    case "mapboxstudio":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

function ServiceDetail() {
  const { serviceId } = Route.useParams();
  const service = serviceAreas.find((item) => item.id === serviceId);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Sync theme toggle state on page mount
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!service) {
    return (
      <main className="bg-background text-foreground min-h-screen flex flex-col justify-between p-6 md:p-10">
        <header className="border-b border-border/50 pb-6 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>Nomi 2000 - 2026</span>
          <Link to="/" className="hover:text-foreground transition-colors">← Back to Portfolio</Link>
        </header>
        <div className="max-w-md mx-auto text-center my-auto">
          <p className="text-foreground/60 mb-6 font-mono text-sm uppercase">Could not find that service.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-border px-6 py-3 text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono"
          >
            Back to services
          </Link>
        </div>
        <footer className="border-t border-border/50 pt-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
          <span>© 2000 - 2026 NOMI · ALL RIGHTS RESERVED</span>
        </footer>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col justify-between p-6 md:p-10 relative overflow-hidden">
      {/* Dynamic theme-aware background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-foreground/[0.015] blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-foreground/[0.01] blur-[120px] pointer-events-none z-0" />

      {/* Top Header Bar matching the KOKORO mockup style */}
      <header className="border-b border-border/50 pb-6 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground z-10 relative">
        <span>NOMI 2000 - 2026</span>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 border border-border hover:border-foreground/80 hover:bg-secondary/40 text-foreground transition-all duration-300 rounded flex items-center justify-center cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="w-3.5 h-3.5" />
            ) : (
              <Sun className="w-3.5 h-3.5" />
            )}
          </button>
          <Link to="/" className="hover:text-foreground transition-colors">
            ← BACK TO PORTFOLIO
          </Link>
        </div>
      </header>

      {/* Hero Header Area with Watermark */}
      <div className="max-w-[1400px] w-full mx-auto my-auto py-16 z-10 relative">
        <div className="relative mb-16">
          {/* Outlined Watermark text running along the background */}
          <h2 
            style={{ WebkitTextStroke: "1px var(--border)", color: "transparent" }}
            className="absolute -top-12 left-0 text-[8vw] font-display font-black uppercase select-none pointer-events-none tracking-tighter whitespace-nowrap leading-none z-0"
          >
            {service.tag}
          </h2>

          <h1 className="relative font-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.95] uppercase text-foreground z-10">
            {service.page.heading}
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border/80 pl-4">
            Service / {service.short}
          </p>
        </div>

        {/* Split Grid Layout separated by fine borders */}
        <div className="grid md:grid-cols-12 border-t border-border/50">
          
          {/* Left Column: Overview and Tools */}
          <div className="md:col-span-5 md:pr-12 py-12 md:border-r border-border/50">
            {/* Overview */}
            <div className="mb-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 flex items-center gap-2">
                <span>↘</span> OVERVIEW
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {service.page.intro}
              </p>
            </div>

            {/* Tools & Tech */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 flex items-center gap-2">
                <span>↘</span> TOOLS & TECHNOLOGIES
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {service.page.tools.map((tool) => {
                  const ToolIcon = getToolIcon(tool);
                  return (
                    <div 
                      key={tool} 
                      className="py-2.5 border-b border-border/30 font-mono text-[11px] text-foreground/90 flex items-center justify-between group hover:border-foreground/30 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2.5">
                        {ToolIcon && <span className="text-muted-foreground group-hover:text-foreground transition-colors">{ToolIcon}</span>}
                        <span>{tool}</span>
                      </div>
                      <span className="text-muted-foreground/30 group-hover:text-foreground/50 transition-colors">↳</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Key Skills and Professional Summary */}
          <div className="md:col-span-7 md:pl-12 py-12">
            {/* Key Skills */}
            <div className="mb-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 flex items-center gap-2">
                <span>↘</span> KEY ACCOMPLISHED SKILLS
              </h3>
              <ul className="space-y-4">
                {service.page.skills.map((skill, idx) => (
                  <li 
                    key={skill} 
                    className="text-sm text-foreground/95 leading-relaxed flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/55 mt-0.5">0{idx + 1}</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 flex items-center gap-2">
                <span>↘</span> PROFESSIONAL CONTEXT SUMMARY
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground border-l border-border/80 pl-5 italic">
                {service.page.professionalSummary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer matching standard KOKORO metadata format */}
      <footer className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground z-10 relative">
        <span>© 2000 - 2026 NOMI · ALL RIGHTS RESERVED</span>
        <span>PORTFOLIO VOL. 01 · BRUTALIST MINIMALIST LAYOUT</span>
      </footer>
    </main>
  );
}
