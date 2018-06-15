const { exec } = require('child_process');

let log = (data) => {console.log(data);}

var OStoScriptComposite = {
    Windows: {
        isCurrentOS: 'win32' === process.platform,
        action: () => {
            exec('docker-compose up').stdout.on('data', log);
            exec('npm run-script serve').stdout.on('data', log);
        }
    }
};

(function executeScriptDependingOnCurrentOS(OStoScriptComposite) {
    process.exitCode = 1;
    for (var OSkey in OStoScriptComposite) {
        let OS = OStoScriptComposite[OSkey];
        if (OS.isCurrentOS) {
            process.exitCode = 0;
            OS.action();
            console.log(`Detected: ${OSkey}`)
            break;
        }
    }
    if (1 === process.exitCode) {
        console.log(`Your OS is not supported.`);
    }
}(OStoScriptComposite));

