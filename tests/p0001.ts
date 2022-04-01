import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { P0001 } from "../target/types/p0001";

describe("p0001", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.P0001 as Program<P0001>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
