import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getSiteData, saveSiteData, SiteData, Project } from "@/lib/store";
import { Plus, Trash2, Save, ShoppingBag, Zap } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const Admin = () => {
    const [data, setData] = useState<SiteData>(getSiteData());
    const [newProject, setNewProject] = useState<Partial<Project>>({ features: [] });
    const [newFeature, setNewFeature] = useState("");

    const handleSave = () => {
        saveSiteData(data);
        toast.success("Settings saved successfully!");
    };


    const addProject = () => {
        if (!newProject.title) return;
        const project: Project = {
            id: Date.now().toString(),
            title: newProject.title,
            description: newProject.description || "",
            image: newProject.image || "",
            features: newProject.features || [],
        };
        setData({ ...data, projects: [...data.projects, project] });
        setNewProject({ features: [] });
        toast.success("Project added");
    };

    const removeProject = (id: string) => {
        setData({ ...data, projects: data.projects.filter((p) => p.id !== id) });
        toast.error("Project removed");
    };

    return (
        <Layout>
            <SEO title="Admin Dashboard" description="Manage your ZUNO website content." />
            <div className="container-wide py-24">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
                        <p className="text-muted-foreground mt-2">Manage your website content</p>
                    </div>
                    <Button onClick={handleSave} className="bg-accent hover:bg-accent/90">
                        <Save size={18} className="mr-2" />
                        Save Changes
                    </Button>
                </div>

                <Tabs defaultValue="general" className="space-y-8">
                    <TabsList className="bg-secondary p-1">
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                    </TabsList>

                    <TabsContent value="general">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Zap className="text-accent" />
                                    Growth Metrics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Revenue Generated Display</label>
                                    <Input
                                        value={data.revenue}
                                        onChange={(e) => setData({ ...data, revenue: e.target.value })}
                                        placeholder="50M PKR"
                                    />
                                    <p className="text-xs text-muted-foreground italic">Try values like "$1.2B" or "500k+"</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="projects">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Plus className="text-accent" />
                                        New Project / Product
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Input
                                        placeholder="Title"
                                        value={newProject.title || ""}
                                        onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                                    />
                                    <Textarea
                                        placeholder="Description"
                                        value={newProject.description || ""}
                                        onChange={e => setNewProject({ ...newProject, description: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Image URL"
                                        value={newProject.image || ""}
                                        onChange={e => setNewProject({ ...newProject, image: e.target.value })}
                                    />

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Features</label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="Add feature..."
                                                value={newFeature}
                                                onChange={e => setNewFeature(e.target.value)}
                                                onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), setNewProject({ ...newProject, features: [...(newProject.features || []), newFeature] }), setNewFeature(""))}
                                            />
                                            <Button type="button" size="sm" onClick={() => (setNewProject({ ...newProject, features: [...(newProject.features || []), newFeature] }), setNewFeature(""))}>Add</Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {newProject.features?.map((f, i) => (
                                                <div key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full flex items-center gap-1">
                                                    {f}
                                                    <button onClick={() => setNewProject({ ...newProject, features: newProject.features?.filter((_, idx) => idx !== i) })}>&times;</button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Button onClick={addProject} className="w-full">Add Project</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <ShoppingBag className="text-accent" />
                                        Managed Projects
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {data.projects.map(project => (
                                        <div key={project.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                            <div className="flex-1">
                                                <div className="font-medium truncate max-w-[200px]">{project.title || "Untitled Project"}</div>
                                                <div className="text-xs text-muted-foreground">{project.features.length} features listed</div>
                                            </div>
                                            <Button variant="ghost" size="sm" onClick={() => removeProject(project.id)}>
                                                <Trash2 size={16} className="text-destructive" />
                                            </Button>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};

export default Admin;
