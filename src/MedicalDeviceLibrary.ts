import * as oil from "@xcd/oil-client";

const client = oil.createOilClient({ url: "https://oil-staging.simplant.com", timeout: 5000 });
export const medicalDeviceLibrary = oil.createMedicalDeviceLibrary(client);
