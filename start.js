const { exec } = require('child_process');

let execOutputFunc = (err, stdout, stderr) => {
    console.log(`Error happened: ${err.message}`);
    console.log('Stdout: ' + stdout);
    console.log('Stderr: ' + stderr);
}

var OStoScriptComposite = {
    Windows: {
        isCurrentOS: 'win32' === process.platform,
        action: () => {
            exec('docker-compose up', execOutputFunc);
            exec('npm test', execOutputFunc);
            exec('npm run-script serve', execOutputFunc);
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

