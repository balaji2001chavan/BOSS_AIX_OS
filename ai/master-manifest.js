export default {
  name: "BOSS AIX OS",
  version: "1.0.0",
  mode: "autonomous",
  description: "Self-evolving hybrid AI operating system with universe visualization, auto-code generation, and self-repair.",

  abilities: {
    generateCode: true,
    modifyFiles: true,
    autoDeploy: true,
    selfRepair: true,
    universeRender: true,
    hologramEntity: true,
    voiceProcessing: true
  },

  directories: {
    engine: "./engine/",
    universe: "./universe/",
    ui: "./ui/",
    system: "./system/",
    ai: "./ai/"
  },

  engines: {
    codeGenerator: "./engine/code-writer.js",
    taskPlanner: "./engine/task-planner.js",
    fileManager: "./engine/file-manager.js",
    deployer: "./system/deploy-engine.js",
    fixer: "./system/self-repair.js",
    universeRenderer: "./universe/index.js",
    hologramEntity: "./ui/ai-entity.js"
  },

  triggers: {
    onCommand: "ai.processCommand",
    onError: "fixer.repair",
    onDeploy: "deployer.deploy"
  }
};
