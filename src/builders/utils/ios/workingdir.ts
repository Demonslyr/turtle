import path from 'path';
import { ExponentTools } from 'xdl';
import config from 'turtle/config';

export function formatShellAppDirectory(sdkVersion: string) {
  const majorVersion = ExponentTools.parseSdkMajorVersion(sdkVersion);
  return config.builder.useLocalWorkingDir
    ? path.join(config.directories.workingDir, 'local')
    : path.join(config.directories.workingDir, 'ios', `sdk${majorVersion}`);
}